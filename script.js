// Dữ liệu thông tin thành viên
const members = {
    dang: {
        name: "Nguyễn Khánh Đăng",
        details: {
            khóa: "D22",
            ngành: "CNTT",
            quê_quán: "Hưng Yên",
            tính_cách: "Nhạy cảm, hòa đồng, ít nói",
            sở_thích: "Nghe nhạc, xem phim, đọc sách, chơi game (LOL, AOV), du lịch",
            tình_trạng_mqh: "Độc toàn thân"
        }
    },
    hung: {
        name: "Nguyễn Võ Hưng",
        details: {
            khóa: "D22",
            ngành: "CNTT",
            quê_quán: "Hà Tĩnh",
            tính_cách: "Hòa đồng, nhiệt tình, sẵn sàng giúp đỡ, miệng hơi 'hỗn' chút (em không biết dùng từ gì nữa)",
            sở_thích: "Thích hát, làm mấy trò vô tri, thích chơi game FPS, AOV, đá bóng, nghe nhạc, đọc truyện",
            tình_trạng_mqh: "Đã có chủ ạ"
        }
    },
    hoa: {
        name: "Ngô Xuân Hòa",
        details: {
            khóa: "D22",
            ngành: "CNTT",
            quê_quán: "Nghệ An",
            tính_cách: "bất thường, lúc vui vẻ hòa đồng, lúc lạnh lùng khó tính. (em thích ảnh thẻ anh ý hơn)",
            sở_thích: "Thích hát, chơi thể thao",
            tình_trạng_mqh: "Độc thân"
        }
    },
    duyanh: {
        name: "Nguyễn Duy Anh",
        details: {
            khóa: "D22",
            ngành: "CNTT",
            quê_quán: "Hà Nội",
            tính_cách: "Hiền, hòa đồng, thân thiện",
            sở_thích: "Code, tiếng Anh, đặc biệt là sinh Test làm em TLE test 108 xong WA on Test 136 ạ :(",
            tình_trạng_mqh: "Độc thân ạ"
        }
    },
    dung: {
        name: "Nguyễn Trí Dũng",
        details: {
            khóa: "D22",
            ngành: "CNTT",
            quê_quán: "Nam Định",
            tính_cách: "Ham học hỏi, vui vẻ, hòa đồng",
            sở_thích: "Nghe nhạc và hát đặc biệt là các bài nhạc buồn, nhạc suy chuyên phục vụ cho những anh em FA lâu năm và những anh em mới thất tình, anh cũng hay chơi AOV nữa ạ",
            tình_trạng_mqh: "Hẹn hò ạ"
        }
    },
    nam: {
        name: "Vũ Thành Nam",
        details: {
            khóa: "D22",
            ngành: "CNTT",
            quê_quán: "Hà Nội",
            tính_cách: "Hơi rụt rè, trầm tính, đôi lúc chắc anh cũng run quá nên nói gì em cũng khong hiểu lắm, ",
            sở_thích: "Wibu, code, một vài game khác...",
            tình_trạng_mqh: "Em cũng không rõ nữa :("
        }
    },
    dat: {
        name: "Trần Đức Đạt",
        details: {
            khóa: "D22",
            ngành: "CNTT",
            quê_quán: "Nghệ An",
            tính_cách: "Hơi vô tri, khó hiểu",
            sở_thích: "Thích nghe nhạc(đặc biệt là nhạc suy), bóng đá và một vài môn thể thao điện tử",
            tình_trạng_mqh: "Nhà có nóc ạ"
        }
    },
    bach: {
        name: "Trịnh Lê Xuân Bách",
        details: {
            khóa: "D22",
            ngành: "CNTT",
            quê_quán: "Thanh Hóa",
            tính_cách: "Hòa đồng, thân thiện, nhiệt tình, thích bắt chuyện và khi nói chuyện thì dễ bị lạc đề và luyên thuyên, khá dễ bị nổi nóng(khi đang nghiêm túc làm 1 việc), thẳng thắn góp ý kiến, biết gắn kết mn, quan tâm mn xung quanh",
            sở_thích: "Xem phim ngôn tình, đọc truyện tu tiên(thể loại nào cũng đọc), chơi game (game gì cũng chơi cũng ham), ăn uống, ngủ cũng rất thích hát và nghe nhạc nhưng mà hát hổng có hay (anh í tự nhận ạ), code",
            tình_trạng_mqh: "Ảnh bảo bí mật nma em thấy mes hồng òi"
        }
    },
    phuong: {
        name: "Mai Thị Phượng",
        details: {
            khóa: "D22",
            ngành: "CNTT",
            quê_quán: "Thái Bình",
            tính_cách: "Hơi rụt rè, ít nói, năng động, lúc làm việc mới cóa cơ hội nói chuyện ạ",
            sở_thích: "",
            tình_trạng_mqh: ""
        }
    },
};

function showInfo(memberId) {
    const info = members[memberId];
    document.getElementById("name").innerText = info.name;
    
    document.getElementById("details").innerHTML = `
        <strong>Khóa:</strong> ${info.details.khóa}<br>
        <strong>Ngành:</strong> ${info.details.ngành}<br>
        <strong>Quê quán:</strong> ${info.details.quê_quán}<br>
        <strong>Tính cách:</strong> ${info.details.tính_cách}<br>
        <strong>Sở thích:</strong> ${info.details.sở_thích}<br>
        <strong>Tình trạng mối quan hệ:</strong> ${info.details.tình_trạng_mqh}
    `;
    
    document.getElementById("member-info").style.display = "block";
}

function closeInfo() {
    document.getElementById("member-info").style.display = "none";
}
