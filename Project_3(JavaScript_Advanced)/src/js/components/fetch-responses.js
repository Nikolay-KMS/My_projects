

async function postCard(data) { 
  const option = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    mode: "cors",
    "body" : JSON.stringify(data)}
  await fetch("https://eobeobd58cj45sc.m.pipedream.net", option)
  .then(res => res.json())
  .then(res => {
    const id = res.key;  
    addCardToHtml({id, ...res.value});
  })
}


async function getCards() {
  await fetch("https://eocpfm06arl4ibn.m.pipedream.net")
  .then(res => res.json())
  .then(res => {
    const arrCards = Object.entries(res);
    arrCards.forEach(elem => addCardToHtml({key:elem[0], ...elem[1]}));
    checkCork();
  });
}

async function putCard(data) {
  const option = {
    method: "PUT",
    headers: {
      'Content-Type':'application/json'
    },
    mode: "cors",
    "body": JSON.stringify(data)
  }
  const res = await fetch ("https://eo8o4phxh10xrep.m.pipedream.net", option)
  .then(response => response.json())
  .then(res => {
  const key = res.key;
  editCardInHtml({key, ...res.data})
  })
}

async function deleteCard(dataKey) {
  const option = {
    method: "DELETE",
    headers: {
      'Content-Type':'application/json'
    },
    mode: "cors",
    "body": JSON.stringify(dataKey)
  }

  await fetch ("https://eokub9t5q3an3z1.m.pipedream.net", option)
  .then(response => response.json())
  .then(res => {
    document.getElementById(res).remove();
  })
};
