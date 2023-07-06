//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return its values in an array"
function objectValues(object) {
    var arr = [];
    arr = Object.values(object)
    
    return arr
}
 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its keys in a string each separated with a space"
function keysToString(object) {
    var arr1 = [];
    arr1 = Object.keys(object);
    var str = arr1.join(' ')
      
    return str;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its string values in a string each separated with a space"
function valuesToString(object) {
   var arr2 = [];
   arr2 = Object.values(object).filter(value => typeof value === 'string');
   var str1 = arr2.join(' ')
   return str1

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return 'array'
    }else if (typeof collection === 'object' ){
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    var newWord = string[0].toUpperCase() + string.slice(1);
    return newWord
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and return a string with all the words capitalized//
function capitalizeAllWords(string) {
    const words = string.split(' ');

    const capitalizedWords = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      return firstLetter + restOfWord;
    });
  
    return capitalizedWords.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var arr5 = [];
    var name = object.name[0].toUpperCase() + object.name.slice(1)
  arr5.push('Welcome ' + name + '!');
    arr5.join(' ');
    console.log(arr5)
  return arr5
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var nameAndSpec = [];
    var name1 = object.name[0].toUpperCase() + object.name.slice(1);
    var species = object.species[0].toUpperCase() + object.species.slice(1);
    nameAndSpec.push(name1 + ' is a ' + species);
    nameAndSpec.join(' ')
      console.log(nameAndSpec)
    return nameAndSpec
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, if this object has a noises array return them as a string separated by a space,
// if there are no noises return 'there are no noises'
function maybeNoises(object) {

    if(Array.isArray(object.noises) && object.noises.length > 0){
    return object.noises.join(' ')
}else{
return 'there are no noises'
}
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    const words = string.split(' ');
    return words.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name);
return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.hasOwnProperty('friends') && Array.isArray(object.friends)) {
        return object.friends.includes(name);
}else {return false}
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var notFriends = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i].name !== name && (!array[i].friends || !array[i].friends.includes(name))) {
      notFriends.push(array[i].name);
    }
  }

  return notFriends;
}
    

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, a key and a value. Should update the property <key> on <object> with new <value>
//. If <key> does not exist on <object> create it.
function updateObject(object, key, value) {
    if (object.key !== object.key) {
       return  object['key'] = value;
      }
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}