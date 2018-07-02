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