// characterLimit.js

export const getRemainingCharacters = (value, maxLength) => {
    // Strip HTML tags to get the plain text length
    const plainText = value.replace(/<[^>]+>/g, "");
    
    // Calculate the remaining characters
    const remaining = maxLength - plainText.length;
  
    // Return the remaining characters
    return remaining >= 0 ? remaining : 0; // Ensure remaining characters don't go negative
  };
  