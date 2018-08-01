use super::schema::chats;

#[derive(Queryable)]
pub struct Chat {
    pub id: String,
    pub content: String,
}

#[derive(Insertable)]
#[table_name = "chats"]
pub struct NewChat<'a> {
    pub id: &'a str,
    pub content: &'a str,
}
