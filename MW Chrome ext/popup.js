object.onclick = function(){myScript};

Array.from(document.querySelectorAll('#wellbeing check in')).reduce((acc, input) => ({ ...acc,[input.id]: input.value }), {});