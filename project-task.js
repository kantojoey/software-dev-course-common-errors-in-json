/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example.com"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/
// Line 50: Added a missing comma which is needed in the object to move to the next key which will be parsed.
// Line 54: Added quotes around the key "name" otherwise it cannot be parsed.
// Line 60: Replaced the value undefined with null as undefined is not a valid JSON value.
// Line 61: Added ".com" to make a valid email. This won't cause a parsing issue, but when passed on as data, the email will be invalid.
// Line 67: Deleted trailing comma after "Parking" so the array can be properly terminated and then parsed.



// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

// I went line by line and checked each key and value very carefully. Specifically I was looking for missing/trailing/extra commas.
// I also was looking at each key to make sure it was wrapped in double quotes before even looking at it's respective value.
// Another technique was to check each opening bracket/brace and make sure it had a corresponding closer in the appropriate locatition.
// Lastly, I looked for invalid values, and found one in the use of "undefined" as a value.

2️⃣ How did you confirm that your corrected JSON file was valid?
// After reviewing it visually, I pasted it into a JSON validator to confirm there were no remaining issues.

3️⃣ Which errors were the most difficult to spot? Why?
// The trailing comma on line 67 after "Parking" was the hardest to spot because the commas are small characters and it is normal to expect a comma after an element in a list, but it's important to verify that the final element in an array or object is NOT followed by a comma, only a closing bracket/brace.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
*/
// For sure, the best safeguard against any JSON issues is to use a JSON validator. While we can check very thoroughly, we may still miss something with just our eyes, but a validator will ensure that absolutely no syntax mistake makes it into our final code. Aside from validators, when reviewing code it is imnportant to know what to look for and keep an eye out for specific errors we know we are prone to, such as missing/extra/trailing commas and missing quotes around keys, as well as the accidental use of single quotes.

