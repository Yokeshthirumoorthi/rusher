use diesel;
use diesel::prelude::*;
use dotenv::dotenv;

use models;
use std::env;
use uuid;
pub fn establish_connection() -> SqliteConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    SqliteConnection::establish(&database_url)
        .expect(&format!("Error connecting to {}", database_url))
}

pub fn create_chat(conn: &SqliteConnection, content: &str) -> usize {
    use schema::chats;

    let uuid = format!("{}", uuid::Uuid::new_v4());
    let new_chat = models::NewChat {
        id: &uuid,
        content: content,
    };

    println!("new uuid {}", uuid);

    diesel::insert_into(chats::table)
        .values(&new_chat)
        .execute(conn)
        .expect("Error saving new post")
}
