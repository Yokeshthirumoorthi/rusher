// Copyright © 2018 Yokesh Thirumoorthi
// [This program is licensed under the "MIT License"]
// Please see the file LICENSE in the source
// distribution of this software for license terms.

//! Functions to interact with database

use diesel;
use diesel::prelude::*;
use dotenv::dotenv;

use models;
use std::env;
use uuid;

/// Establishes new connection to sqlite database
pub fn establish_connection() -> SqliteConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    SqliteConnection::establish(&database_url)
        .expect(&format!("Error connecting to {}", database_url))
}

/// Saves chat data in sqlite database
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
