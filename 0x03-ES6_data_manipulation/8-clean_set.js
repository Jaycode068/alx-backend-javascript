export default function cleanSet(set, startString) {
  const matchingElements = new Set();

  if (startString === undefined || startString === "") {
    return " ";
  } else {
    set.forEach((element) => {
      if (element.startsWith(startString)) {
        const cleanedElement = element.substring(startString.length);
        matchingElements.add(cleanedElement);
      }
    });

    return [...matchingElements].join('-');
  }
}

