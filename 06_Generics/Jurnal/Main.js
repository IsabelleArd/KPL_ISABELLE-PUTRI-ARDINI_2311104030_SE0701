// Kelas SayaTubeVideo
class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul tidak boleh kosong dan maksimal 100 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (count < 0 || count > 25000000) {
            throw new Error("Play count harus antara 0 dan 25.000.000.");
        }
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}, Title: ${this.title}, Play Count: ${this.playCount}`);
    }
}

// Kelas SayaTubeUser
class SayaTubeUser {
    constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username tidak boleh kosong dan maksimal 100 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.username = username;
        this.uploadedVideos = [];
    }

    addVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Hanya bisa menambahkan instance dari SayaTubeVideo.");
        }
        this.uploadedVideos.push(video);
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.slice(0, 10).forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
    }
}

// Kode eksekusi
const user = new SayaTubeUser("Isabelle Putri Ardini");

const videoTitles = [
    "Review Film Interstellar oleh Isabelle Putri Ardini",
    "Review Film Inception oleh Isabelle Putri Ardini",
    "Review Film The Dark Knight oleh Isabelle Putri Ardini",
    "Review Film The Matrix oleh Isabelle Putri Ardini",
    "Review Film Parasite oleh Isabelle Putri Ardini",
    "Review Film Avengers: Endgame oleh Isabelle Putri Ardini",
    "Review Film Joker oleh Isabelle Putri Ardini",
    "Review Film Fight Club oleh Isabelle Putri Ardini",
    "Review Film Pulp Fiction oleh Isabelle Putri Ardini",
    "Review Film The Godfather oleh Isabelle Putri Ardini"
];

videoTitles.forEach(title => {
    const video = new SayaTubeVideo(title);
    video.increasePlayCount(Math.floor(Math.random() * 10000));
    user.addVideo(video);
});

user.printAllVideoPlaycount();
