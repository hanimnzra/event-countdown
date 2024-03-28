(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let anniversary = "Dec 09, 2023 16:00:00",
        countDown = new Date(anniversary).getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            // Countdown Animation
            const countdown = document.getElementById("countdown");
            if (distance < 0) {
                countdown.style.animation = "bounce 0.5s ease infinite";
            } else {
                countdown.style.animation = "";
            }

            // Hide Countdown when date is reached
            if (distance <= 0) {
                document.getElementById("countdown").style.display = "none";

                // Create and position images to form a square around the content
                const squareImages = document.createElement("div");
                squareImages.id = "square-images";

                const container = document.querySelector(".container");
                container.appendChild(squareImages);

                const images = [
                    "a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg", "g.jpg", "h.jpg",
                    "i.jpg", "j.jpg", "k.jpg", "l.jpg", "m.jpg", "n.jpg", "o.jpg", "p.jpg",
                    "q.jpg", "r.jpg", "s.jpg", "t.jpg", "u.jpg", "v.jpg", "w.jpg", "x.jpg",
                    "y.jpg", "z.jpg", "zz.jpg" // Add more images as needed
                ];

                for (let i = 0; i < images.length; i++) {
                    const img = document.createElement("img");
                    img.src = `images/${images[i]}`;
                    img.alt = `Anniversary Image ${i + 1}`;
                    squareImages.appendChild(img);
                }
            }

            // do something later when date is reached
            if (distance <= 0) {
                let headline = document.getElementById("headline"),
                    content = document.getElementById("content");

                headline.innerText = "It's our 4th year together!";
                content.style.display = "block";

                clearInterval(x);
            }
            // seconds
        }, 1000); // Set interval to 1000 milliseconds (1 second)
}());
