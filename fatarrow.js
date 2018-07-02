const team = {
    members: ["jane", "bill"],
    teamName: "SuperSquad",
    teamSummary: function () {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;
        });
    }

}
team.teamSummary();


//const profile = {
//    name: 'Alex',
//  getName: function(){
//    return this.name;
//  }
//};

//let getName = (profile) =>  profile.name;



const profile = {
    name: 'Alex',
    getName: function () {
        return this.name;

    }
};

profile.getName()