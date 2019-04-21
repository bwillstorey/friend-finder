var buddyData = [
    {
        "name": "Steve Zissou",
        "photo": "https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/36906/1518207814-13368-5527/3051336-poster-p-1-the-many-reasons-bill-murray-missed-out-on-major-movies_large.jpg",
        "scores": [5, 2, 3, 5, 3, 4, 3, 4, 5, 2]
    },
    {
        "name": "Klaus Daimler",
        "photo": "https://i.pinimg.com/originals/72/3d/67/723d6778c8002b748dc36dd43136e8aa.jpg",
        "scores": [3, 3, 2, 1, 1, 1, 1, 5, 5, 3]
    },
    {
        "name": "Ned Plimpton",
        "photo": "http://movie-roulette.com/photos_big/the-life-aquatic-with-steve-zissou-9-1.jpeg",
        "scores": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    },
    {
        "name": "Pele dos Santos",
        "photo": "https://i.pinimg.com/originals/de/ca/32/deca3271dd0130b448dc7f356112073b.jpg",
        "scores": [5, 2, 3, 5, 3, 4, 3, 4, 5, 2]
    },
    {
        "name": "Esteban du Plantier",
        "photo": "http://www.rushmoreacademy.com/academy/images/duplantier.jpg",
        "scores": [5, 2, 3, 5, 3, 4, 3, 4, 5, 2]
    },
    {
        "name": "Alistair Hennessey",
        "photo": "https://i.pinimg.com/originals/58/d3/2e/58d32ef9ea342321d4b65e66dd238375.jpg",
        "scores": [1, 1, 1, 5, 5, 5, 2, 4, 1, 2]
    },
    {
        "name": "Jane Winslett-Richardson",
        "photo": "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-the-life-aquatic-with-steve-zissou-cate-blanchett.jpg",
        "scores": [1, 5, 5, 5, 3, 3, 3, 4, 5, 2]
    },
    {
        "name": "Eleanor Zissou",
        "photo": "https://i.pinimg.com/originals/32/d5/f7/32d5f7a6c5c9860a3aa330b5205eacf2.jpg",
        "scores": [2, 1, 4, 4, 3, 2, 1, 1, 1, 2]
    },
]

var diver;
var diverPhoto;
var totalDifference = 0

function selectBuddy () {
    var currentDifference = 0;
    for (var i = 0; i < buddyData.length; i++) {
        for (var j = 0; j < buddyData[i].scores.length; j++) {
            currentDifference = currentDifference + Math.abs((userData[i].scores[j] - buddyData[i].scores[j]));
        }

        if (currentDifference < totalDifference) {
            diver = buddyData[i].name;
            diverPhoto = buddyData[i].photo;
        }
    }
    console.log("diver is: " + diver + " .");
}


module.exports = buddyData, selectBuddy , diver, diverPhoto;
