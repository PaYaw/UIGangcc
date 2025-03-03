document.getElementById("logo-upload").addEventListener("change", function(event) {
    let reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("gang-logo").src = e.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});

function addMember() {
    let memberList = document.getElementById("member-display");
    let select = document.getElementById("member-list");
    let memberName = select.options[select.selectedIndex].text;
    let memberId = select.value;

    if (memberId) {
        let li = document.createElement("li");
        li.textContent = memberName;
        memberList.appendChild(li);
        select.value = ""; // รีเซ็ต dropdown
    }
}

function createGang() {
    let gangName = document.getElementById("gang-name").value;
    let logo = document.getElementById("gang-logo").src;

    if (!gangName) {
        alert("❌ กรุณาใส่ชื่อแก๊ง!");
        return;
    }

    alert(`✅ สร้างแก๊ง "${gangName}" สำเร็จ!`);
}
