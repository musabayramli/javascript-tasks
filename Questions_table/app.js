
function toggleCode(codeId) {
    const codeBlock = document.getElementById("code" + codeId);
    const button = codeBlock.previousElementSibling;

    if (codeBlock.style.display === "block") {
      codeBlock.style.display = "none";
      button.textContent = "Kodu Göstər";
    } else {
      codeBlock.style.display = "block";
      button.textContent = "Kodu Gizlət";
    }
  }

  // Task 1: Arrayı " --- " simvolları ilə birləşdirilmiş string halına gətirin
  let arr1 = ["Pen", "Pencil", "Eraser", "Sharpener", "Ruler"];
  let joinedString = arr1.join("---");
  document.getElementById("result1").textContent = joinedString;

  // Task 2: Arrayda təkrarlanan elementləri silin
  let arr2 = ["orange", "banana", "banana", "apple", "apple", "mango"];
  let uniqueArray = [];
  arr2.forEach((item) => {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  });
  document.getElementById("result2").textContent = uniqueArray.join(", ");

  // Task 3: İki ədəd arasında 5-ə bölünən ədədlərin arrayını qaytarın
  function divisibleByFive(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
      if (i % 5 === 0) {
        result.push(i);
      }
    }
    return result;
  }
  document.getElementById("result3").textContent = divisibleByFive(
    15,
    50
  ).join(", ");

  // Task 4: Parametrin obyekt olub olmadığını yoxlayın
  function isObject(input) {
    return (
      typeof input === "object" && !Array.isArray(input) && input !== null
    );
  }
  let result4 = isObject({ name: "John", age: 30 });
  document.getElementById("result4").textContent = result4;

  // Task 5: Arrayda ən böyük və ən kiçik ədədi tapın
  let arr3 = [23, 78, 56, 12, 89, 44, 91];
  let min = arr3[0];
  let max = arr3[0];

  arr3.forEach((num) => {
    if (num < min) min = num;
    if (num > max) max = num;
  });
  document.getElementById("result5").textContent =
    "Ən kiçik: " + min + ", Ən böyük: " + max;

  // Task 6: Arraydə ən kiçik və ən böyük elementi tapmaq (min və max istifadə etmədən)
  function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    arr.forEach((num) => {
      if (num < min) min = num;
      if (num > max) max = num;
    });

    return { min, max };
  }

  let arr6 = [23, 78, 56, 12, 89, 44, 91];
  let result = findMinMax(arr6);
  document.getElementById("result6").textContent =
    "Ən kiçik: " + result.min + ", Ən böyük: " + result.max;

  // Task 7: Daxilində "e" və ya "E" hərfi olan sözləri göstərin
  let arr4 = ["David", "Emily", "Sophia", "Eric", "Oliver"];
  let wordsWithE = arr4.filter((word) => word.toLowerCase().includes("e"));
  document.getElementById("result7").textContent = wordsWithE.join(", ");

  // Task 8: Arrayı aşağıdakı hala gətirin (["Item", uzunluq])
  let arr5 = ["Laptop", "Tablet", "Phone", "Monitor"];
  let transformedArray = arr5.map((item) => [item, item.length]);
  document.getElementById("result8").textContent =
    JSON.stringify(transformedArray);

  // Task 9: Seçim cümlələri yaradın
  let color = ["Pink", "White", "Grey", "Black"];
  let index = ["st", "nd", "rd", "th"];
  let choices = color.map(
    (c, i) => i + 1 + (index[i] || "th") + " choice is " + c + "."
  );
  document.getElementById("result9").textContent = choices.join(" ");

  // Task 10: 8 elementli, hər birində 1 olan array qaytaran funksiya
  function array_filled(length, value) {
    return new Array(length).fill(value);
  }
  let result10 = array_filled(8, 1);
  document.getElementById("result10").textContent = result10.join(", ");