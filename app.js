//defines profileDataArgs and removes first two items from array (file paths)
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

//uses a 'for' loop to print the arguments one at a time
// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
 

  profileDataArr.forEach((profileItem) => console.log(profileItem));
}; 

//calls the function
printProfileData(profileDataArgs);