const tableData = document.querySelector('#apiData');
// todoContainer = document.querySelector("[id='todoContainer']");

async function fetchTodoList(){
    const fatchUrl = " https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    const todoPromise = await fetch(fatchUrl);
    console.log(todoPromise);
    // todoPromise.then(res =>res.json()).then(todoList => {console.log("TodoList",todoList)})
    const getdata = await todoPromise.json();
    return getdata;
}
async function getApiData() {
  const responseData = await fetchTodoList();
  console.log(responseData);

  responseData.map((values) => {
    tableData.innerHTML += `<tr>
        <td callspan="2"><img width="25px" src="${values.image}"/></td>
        <td>${values.name}</td>
        <td>${values.symbol}</td>
        <td>$${values.current_price}</td>
        <td>$ ${values.total_volume}</td>
        <td id = ${values.price_change_percentage_24h> 0 ? "pos_number" : "neg_number"}>${values.price_change_percentage_24h}%</td>
        <td>Mkt Cap : $${values.market_cap}</td>
    </tr>`;
  });
}
getApiData();