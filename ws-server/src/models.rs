// Copyright © 2018 Yokesh Thirumoorthi
// [This program is licensed under the "MIT License"]
// Please see the file LICENSE in the source
// distribution of this software for license terms.

//! Models represents database tables as objects.

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
