// query write to go from a user to a friend's company's names
query{
    user(id: "23"){
        friends {
            company{
                 name
            }
        }
    }
}