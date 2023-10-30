const insert = document.getElementById('insert');

window.addEventListener('keydown', function (params) {
    console.log(insert);
    insert.innerHTML = `
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>keymane</th>
  </tr>
  <tr>
    <td>${params.key}</td>
    <td>${params.keyCode}</td>
    <td>${params.code}</td>
  </tr>
    </table>
    `;
})