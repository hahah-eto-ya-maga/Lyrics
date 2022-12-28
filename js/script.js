window.onload = () => {
    tracks.forEach(track => {
        track.addEventListener("click", (e) => {
            wrappers.forEach(wrapper => {
                if (wrapper.dataset.track === e.target.dataset.track) {
                    wrapper.classList.remove("hide");
                } else {
                    wrapper.classList.add("hide");
                }
            })
        })
    })
    audio.forEach(el => el.volume = 0.45)
}

const tracks   = document.querySelectorAll(".track");
const wrappers = document.querySelectorAll(".wrapper");
const audio    = document.querySelectorAll("audio")
