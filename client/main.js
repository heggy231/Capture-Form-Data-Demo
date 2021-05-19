const form = document.getElementById('form');
form.addEventListener('submit', e => {
  // preven form to reload page refreshes
  e.preventDefault();
  // target is the form itself
  // console.log('e.target', e.target);
  // when you see `new` infront of something- its class (obj with property methods), also it is Capitalized FormData shows that it is class
  const data = new FormData(e.target);
  //  FormData needs formatting
  const formattedData = formatData(data);
  sendData('http://localhost:8080/newcontact', formattedData);
});

const formatData = fd => {
  const data = {};
  // fd.keys() gets all the keys from form data
  for(let key of fd.keys()) {
    // fd.get(key) get the value of the key
    data[key] = fd.get(key);
  }
  // JSON.stringify(data, null, 4) to read in console
  return data;
};

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch fetch using
const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
};

/**
<div class="field-and-label">
<!-- label attrb for matches the value of input -->
<label for="name">Name</label>
<!-- we need id for js and we need attr name to get the value -->
<input id="name" type="text" name="name">
</div>

<div class="field-and-label">
<label for="address">Address</label>
<input id="address" type="text" name="address">
</div>

<div class="field-and-label">
<label for="phone">Phone</label>
<input id="phone" type="text" name="phone">
</div>

<div class="field-and-label">
<label for="email">Email</label>
<input id="email" type="text" name="email">
</div>
*/