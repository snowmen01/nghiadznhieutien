let posts = document.querySelector('.posts'),
    recentPosts = document.querySelector('.recent-posts'),
    postBox= posts.querySelectorAll('.post-box'),
    post = document.querySelector('.post')

post.style.display = 'none'

function fadeIn(element) {
    var op = 0.4 
    element.style.display = ''
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer)
        }
        element.style.opacity = op
        element.style.filter = 'alpha(opacity=' + op * 100 + ")"
        op += op * 0.1
    }, 50)
}

function fadeOut(element) {
    var op = 1 
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer)
            element.style.display = 'none'
        }
        element.style.opacity = op
        element.style.filter = 'alpha(opacity=' + op * 100 + ")"
        op -= op * 0.1
    }, 30)
    element.style.display = 'none'
}

let videoID = [
    "8XdnX47uYuc?start=00", "BrqTaWzDzc0?start=00", "BrqTaWzDzc0?start=112", "BrqTaWzDzc0?start=702", "BrqTaWzDzc0?start=905", "BrqTaWzDzc0?start=986", "BrqTaWzDzc0?start=1917"
]

const scrollto = () => {
    let elementPos = document.querySelector('.blog').offsetTop + 164
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

function showPost() {
    fadeOut(posts)
    fadeIn(post)
    post.querySelectorAll('.entry').forEach(item => {
        item.style.display = 'none'
        scrollto(item)
        if ( item.id == this.id ) {
            item.style.display = 'block'
            let video = document.querySelectorAll('.video')
            if ( video != undefined ) {
                let x = ( item.id == "IV" ) ? 1 : 0
                video.forEach(item => {
                    item.src = "https://www.youtube.com/embed/" + videoID[x]
                    x += 1
                })
            }
        }
    })
    recentPosts.querySelectorAll('.post-item').forEach(item => {
        item.style.display = 'block'
        if ( item.id == this.id ) item.style.display = 'none'
    })
}

postBox.forEach(item => {
    item.addEventListener('click', showPost)
})

recentPosts.querySelectorAll('.post-item').forEach(item => {
    item.addEventListener('click', showPost)
})

function copy() {
    try {
        navigator.clipboard.writeText(`
        <dict>
            <key>Arch</key>
            <string>x86_64</string>
            <key>BundlePath</key>
            <string>USBToolBox.kext</string>
            <key>Comment</key>
            <string/>
            <key>Enabled</key>
            <true/>
            <key>ExecutablePath</key>
            <string>Contents/MacOS/USBToolBox</string>
            <key>MaxKernel</key>
            <string/>
            <key>MinKernel</key>
            <string/>
            <key>PlistPath</key>
            <string>Contents/Info.plist</string>
        </dict>
        <dict>
            <key>Arch</key>
            <string>x86_64</string>
            <key>BundlePath</key>
            <string>UTBMap.kext</string>
            <key>Comment</key>
            <string/>
            <key>Enabled</key>
            <true/>
            <key>ExecutablePath</key>
            <string/>
            <key>MaxKernel</key>
            <string/>
            <key>MinKernel</key>
            <string/>
            <key>PlistPath</key>
            <string>Contents/Info.plist</string>
        </dict>
        `)
        //this.innerHTML = "đã copy"
    } catch (error) {
        //this.innerHTML = "vui lòng thử lại"
    }
}

document.querySelector('.coSb').addEventListener('click', copy)