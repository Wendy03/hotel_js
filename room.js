const token = "Hv7Aq1ueVlP0sYZmnBRfk1nlB3b4oAANj6b5P5QNu7BiP6u0UDlohleze749";
const id = location.search.split("=")[1];
const url = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`;

axios.defaults.headers["Authorization"] = `Bearer ${token}`;

const imgCarousel = document.querySelector(".carousel-inner");
const roomInfo = document.querySelector(".roomInfo");
const amenitiesInfo = document.querySelector(".amenitiesInfo");
let roomData = [];

axios.get(url).then((res) => {
	roomData = res.data.room[0];
	console.log(roomData);
	imageCard(roomData);
	infoCard(roomData);
	amenitiesCard(roomData);
});

function imageCard() {
	const image = roomData.imageUrl;
	imgCarousel.innerHTML = `
		<div class="carousel-item active">
			<img class="d-block w-100" src="${image[0]}" alt="First slide"
				style="height: 500px; object-fit: cover;"
			>
		</div>
		<div class="carousel-item">
			<img class="d-block w-100" src="${image[1]}" alt="Second slide"
				style="height: 500px; object-fit: cover;"
			>
		</div>
		<div class="carousel-item">
			<img class="d-block w-100" src="${image[2]}" alt="Third slide"
				style="height: 500px; object-fit: cover;"
			>
		</div>
		`;
}

function infoCard() {
	roomInfo.innerHTML = `
	<h3>${roomData.name}</h3>
	<p>${roomData.description}</p>
	<ul>
		<li>人數限制： ${roomData.descriptionShort.GuestMin} ~ ${roomData.descriptionShort.GuestMax}</li>
		<li>床型： ${roomData.descriptionShort.Bed[0]}</li>
		<li>衛浴： ${roomData.descriptionShort["Private-Bath"]} 間 </li>
		<li>房間大小： ${roomData.descriptionShort.Footage} 平方公尺 </li>
	</ul>
	<p>Check In： ${roomData.checkInAndOut.checkInEarly} ~ ${roomData.checkInAndOut.checkInLate}</p>
	<p>Check Out： ${roomData.checkInAndOut.checkOut}</p>
 	<p>平日(一~四)價格： $${roomData.normalDayPrice}</p>
  <p>假日(五~日)價格： $${roomData.holidayPrice}</p>
	`;
}

function amenitiesCard() {
	amenitiesInfo.innerHTML = `
    <div class="col-lg-4 ${
					!roomData.amenities["Wi-Fi"] ? "text-opacity" : ""
				}">
    	<i class="fas fa-wifi"></i>
    	<span class="pl-2">Wi-Fi</span>
    </div>
		<div class="col-lg-4 ${
			!roomData.amenities["Air-Conditioner"] ? "text-opacity" : ""
		}">
    	<i class="fas fa-wind"></i>
    	<span class="pl-2">空調</span>
		</div>
		<div class="col-lg-4 ${
			!roomData.amenities["Television"] ? "text-opacity" : ""
		}">
			<i class="fas fa-tv"></i>
			<span class="pl-2">含電視</span>
		</div>
		<div class="col-lg-4 ${
			!roomData.amenities["Refrigerator"] ? "text-opacity" : ""
		}">
			<i class="fas fa-ice-cream"></i>
			<span class="pl-2">含冰箱</span>
		</div>
		<div class="col-lg-4 ${
			!roomData.amenities["Sofa"] ? "text-opacity" : ""
		}">
			<i class="fas fa-couch"></i>
			<span class="pl-2">含沙發</span>
		</div>
		<div class="col-lg-4 ${
			!roomData.amenities["Mini-Bar"] ? "text-opacity" : ""
		}">
			<i class="fas fa-glass-cheers"></i>
			<span class="pl-2">Mini Bar</span>
		</div>
		<div class="col-lg-4 ${
			!roomData.amenities["Breakfast"] ? "text-opacity" : ""
		}">
    	<i class="fas fa-utensils"></i>
   		 <span class="pl-2">含早餐</span>
		</div>
		<div class="col-lg-4 ${
			!roomData.amenities["Great-View"] ? "text-opacity" : ""
		}">
			<i class="fas fa-mountain"></i>
			<span class="pl-2">漂亮視野</span>
		</div>
		<div class="col-lg-4 ${
			!roomData.amenities["Room-Service"] ? "text-opacity" : ""
		}">
			<i class="fas fa-concierge-bell"></i>
			<span class="pl-2">客房服務</span>
		</div>
    <div class="col-lg-4 ${
					!roomData.amenities["Child-Friendly"] ? "text-opacity" : ""
				}">
    	<i class="fas fa-baby"></i>
    	<span class="pl-2">小孩友善</span>
    </div>
    <div class="col-lg-4 ${
					!roomData.amenities["Pet-Friendly"] ? "text-opacity" : ""
				}">
      <i class="fas fa-paw"></i>
      <span class="pl-2">寵物友善</span>
		</div>
		<div class="col-lg-4 ${
			!roomData.amenities["Smoke-Free"] ? "text-opacity" : ""
		}">
			<i class="fas fa-smoking-ban"></i>
			<span class="pl-2">禁止吸菸</span>
		</div>
	`;
}
