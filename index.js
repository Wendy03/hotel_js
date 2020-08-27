const token = "Hv7Aq1ueVlP0sYZmnBRfk1nlB3b4oAANj6b5P5QNu7BiP6u0UDlohleze749";
const url = "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms";

axios.defaults.headers["Authorization"] = `Bearer ${token}`;

const cardList = document.querySelector(".cardList");
let data = [];

axios.get(url).then((res) => {
	data = res.data.items;
	render(data);
});

function render() {
	let str = "";
	data.forEach((room) => {
		str += `
					<div class="col-md-4 col-sm-6 mb-3">
						<div class="card shadow rounded h-100">
							<div style="height: 250px; background-size: cover; background-position: center;
								background-image: url(${room.imageUrl}">
							</div>
						<div class="card-body">
              <h5 class="card-title text-center">
                <strong>${room.name}</strong>
              </h5>
              <div class="text-right pr-2">
                <p>平日價格: NT ${room.normalDayPrice} 元</p>
                <p>假日價格: NT ${room.holidayPrice} 元</p>
						  </div>
            </div>
            <div class="card-footer">
              <a href="room.html?id=${room.id}" class="detail btn btn-outline-primary btn-block">
              詳細資料
              </a>
            </div>
					</div>
				</div>
			`;
	});
	cardList.innerHTML = str;
}
