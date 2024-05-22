function skillsMember() {
  // your code here
  let skills = this.skills;
  skills.forEach(skill => {
    console.log(`${skill} is a skill of ${this.name}`);
  });
}