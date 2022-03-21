/**
 * Bài 1: Tìm số nguyên nhỏ nhất có tổng từ 1 đến số nguyên đó > 1000
 * - Đầu vào: không có
 * - Xử lí:
 *  + Tạo biến để cộng tích lũy
 *  + Tạo biến bước nhảy để cộng vào biến tích lũy
 * - Đầu ra: số nguyên nhỏ nhất có tổng từ 1 đế số nguyên đó > 1000
 */
function timSoNguyenNhoNhat() {
  var total = 0;
  var i = 0;
  var content = "";
  while (total < 10000) {
    i++;
    total += i;
  }

  content +=
    "<div class='alert alert-success'><p>Số nguyên dương nhỏ nhất: " +
    i +
    "</p></div>";
  document.getElementById("footerNumber").innerHTML = content;
}

timSoNguyenNhoNhat();

/**
 * Bài 2:  tính tổng: S(n) = x + x^2 + x^3 + … + x^n
 * - Đầu vào: số x và số n
 * - Xử lí:
 *  + Dùng vòng lặp for để tính tổng
 * - Đầu ra: Tổng dãy số
 */

function tinhTong(x, n) {
  var total = 0;
  for (var i = 1; i <= n; i++) {
    total += Math.pow(x, i);
  }
  return total;
}

document.getElementById("btnTinhTong").onclick = function () {
  var x = document.getElementById("numberX").value;
  var n = document.getElementById("numberN").value;
  var content = "";

  var total = tinhTong(x, n);

  content += "<div class='alert alert-success'> " + total + "</div>";

  document.getElementById("footerTinhTong").innerHTML = content;
};

/**
 * Bài 3:  Tính giai thừa
 * - Đầu vào: số n
 * - Xử lí:
 *  + Dùng vòng lặp for để tính tổng
 * - Đầu ra: Giai thừa
 */

function tinhGiaiThua(n) {
  var giaiThua = 1;
  for (var i = 1; i <= n; i++) {
    giaiThua *= i;
  }

  return giaiThua;
}

document.getElementById("btnTinhGiaiThua").onclick = function () {
  var n = document.getElementById("numbN").value;
  var content = "";

  var giaiThua = tinhGiaiThua(n);

  content += "<div class='alert alert-success'> " + giaiThua + "</div>";

  document.getElementById("footerTinhGiaiThua").innerHTML = content;
};

/**
 * Bài 4:  In thẻ div chẵn lẻ
 * - Đầu vào: không có
 * - Xử lí:
 *  + Dùng vòng lặp tính chẵn lẻ
 *  + Nếu là chẵn thì in ra thẻ div màu đỏ
 *  + Nếu là lẻ thì in ra thẻ div màu xanh
 * - Đầu ra: Giai thừa
 */

function tinhChanLe(n) {
  var content = "";
  if (n % 2 === 0) {
    content +=
      "<div  style='background-color: red; color: white'> Div chẵn " +
      n +
      "</div>";
  } else {
    content +=
      "<div style='color: white; background-color: blue'> Div lẻ " +
      n +
      "</div>";
  }
  return content;
}

document.getElementById("btnTaoDiv").onclick = function () {
  var n = 1;
  var content = "";
  do {
    content += tinhChanLe(n);
    n++;
  } while (n <= 10);

  document.getElementById("footerTaoDiv").innerHTML = content;
};
