const navItemRadius = document.querySelectorAll('.nav__item__radius')
const creatServ = document.querySelector('.headerColumn .navigation .nav__menu .nav__item__radius .creatServ')
const creatBlock = document.querySelector('.headerColumn .navigation .nav__menu .nav__item__radius .creatServ .creatBlock')
const closeBl = document.querySelectorAll('.close')
const proggram = document.querySelector('.headerColumn .navigation .nav__menu .nav__item__radius .proggramUser')
const proggramBlock = document.querySelector('.headerColumn .navigation .nav__menu .nav__item__radius .proggramUser .proggramBlock')
const proggramItem = document.querySelectorAll('.headerColumn .navigation .nav__menu .nav__item__radius .proggramUser .proggramBlock .proggramUserMenu .proggramUserItem')
const aBack = document.querySelectorAll('.headerColumn .navigation .nav__menu .nav__item__radius .proggramUser .proggramBlock .proggramUserMenu .proggramUserItem .downloadButton')
const searchInfo = document.querySelector('.headerRow .searchChannels .searchInfo')
const searchPaty = document.querySelector('.headerRow .searchChannels .searchInfo .searchPaty')
const searchPatyBlock = document.querySelector('.headerRow .searchChannels .searchInfo .searchPaty .searchPatyBlock')
const inputPaty = document.querySelector('.headerRow .searchChannels .searchInfo .searchPaty .searchPatyBlock input')
const oninp = document.querySelector('.headerRow .searchChannels .searchInfo .searchPaty .searchPatyBlock .oninput')
const channel = document.querySelector('.headerRow .searchChannels .searchInfo .searchPaty .searchPatyBlock .channels')
const navItem = document.querySelectorAll('.headerRow .addFriends nav .navList .navItem')
const friendsItem = document.querySelectorAll('.headerRow .userHelp .userItem .userBlock .messageBlock .friendsMenu .friendItem')
const checkd = document.querySelectorAll('.headerRow .userHelp .userItem .userBlock .messageBlock .friendsMenu .friendItem .checkd')
const userItem = document.querySelectorAll('.headerRow .userHelp .userItem')
const message = document.querySelector('.headerRow .userHelp .userItem .userBlock .messageBlock')
const noneSearch = document.querySelector('.headerRow .userHelp .userItem .userBlock .noneSearch')
const userInput = document.querySelector('.headerRow .userHelp .userItem .userBlock .friendBlock input')
const userBlock = document.querySelector('.headerRow .userHelp .userItem .userBlock')
const mailNavItem = document.querySelectorAll('.headerRow .userHelp .mailBlock .navBlock nav .navList .navItem')
const svgItem = document.querySelectorAll('.headerRow .userHelp .mailBlock .forYou .alerts .alertItem .svgitem')
const boxWrap = document.querySelectorAll('.headerRow .userHelp .mailBlock .forYou .alerts .alertItem .svgitem .boxWrap')
const alertItem = document.querySelectorAll('.headerRow .userHelp .mailBlock .forYou .alerts .alertItem')
const userNavItem = document.querySelectorAll('.infoUserBlockMenu .infoUserBlock .infoBlock nav .navList .navItem')
const svg = document.querySelector('.infoUserBlockMenu .infoUserBlock .messageLine .svgBlock svg')
const wrapBlock = document.querySelector('.infoUserBlockMenu .infoUserBlock .messageLine .svgBlock .wrapBlock')
const mailBlock = document.querySelector('.headerRow .userHelp .mailBlock')
const infoBlockUser = document.querySelector('.infoUserBlockMenu')
const userInfoBlock = document.querySelector('.infoUserBlockMenu .infoUserBlock .infoBlock .userInfoCont')
const userServBlock = document.querySelector('.infoUserBlockMenu .infoUserBlock .infoBlock .userServCont')
const userFriendsBlock = document.querySelector('.infoUserBlockMenu .infoUserBlock .infoBlock .userFriendsCont')
const blockUser = document.querySelector('.infoUserBlockMenu .blockUser')
const unread = document.querySelector('.headerRow .userHelp .mailBlock .unread')
const forYou = document.querySelector('.headerRow .userHelp .mailBlock .forYou')
const mention = document.querySelector('.headerRow .userHelp .mailBlock .mention')
let arr = ['img/ProgImg1.svg', 'img/ProgImg2.svg', 'img/ProgImg3.svg', 'img/ProgImg4.svg', 'img/ProgImg5.svg']
let arr2 = ['img/ProgImg1-1.svg', 'img/ProgImg2-2.svg', 'img/ProgImg3-3.svg', 'img/ProgImg4-4.svg', 'img/ProgImg5-5.svg']
let num = -1;
let bool = true;
let numFor = -1;
let style;

let wrap = (y, x) => {
    y.onclick = (e) => {
        x.style.display = 'block'
        e.target == x || (e.target == closeBl[0] || e.target == closeBl[1]) ? x.style.display = 'none' : ''
    }
}
let documWrap = (x) => {
    document.onclick = () => {
        x.style.display == 'block' ? (x.style.display = 'none', document.onclick = () => false) : x.style.display = 'block'
        x.onclick = () => {
            x.style.display = 'none'
        }
        return false;
    }
}
let changeClick = (x, b) => {
    for (let i = 0; i < x.length; i++) {
        x[i].onclick = () => {
            x[i].style = b;
            for (let j = 0; j < x.length; j++) {
                j == i ? j++ : ''
                x[j].style = null
            }
        }
    }
}
let funcChange = (x, y, u, e, style, block, flex) => {
    for (let i = 0; i < x.length; i++) {
        x[i].onclick = () => {
            x[i].style = style
            for (let j = 0; j < x.length; j++) {
                j == i ? j++ : '';
                x[j].style = null;
                i == 0 ? y.style.display = block : y.style.display = 'none'
                i == 1 ? u.style.display = flex : u.style.display = 'none'
                i == 2 ? e.style.display = flex : e.style.display = 'none'
            }
        }
    }
}
wrap(navItemRadius[0], creatServ)
wrap(navItemRadius[2], proggram)
wrap(searchInfo, searchPaty)
searchPaty.style.left = -70 + 'px'
inputPaty.oninput = () => {
    channel.style.display = 'none';
    oninp.style.display = 'grid';
    inputPaty.value == '' ? (channel.style.display = 'block', oninp.style.display = 'none') : ''
}
for (let i = 0; i < arr.length; i++) {
    proggramItem[i].style.background = `url(${arr[i]}) no-repeat 50% 20% / 50%`
    proggramItem[i].onmouseover = () => {
        proggramItem[i].style = `background: url(${arr2[i]}) no-repeat 50% 20% / 50%; border: solid 2px #5865F2;`
        aBack[i].style.background = '#5865F2';
        proggramItem[i].onmouseover = false;
    }
}
userItem[0].onclick = () => {
    mailBlock.style.display = 'none'
    documWrap(userBlock)
    userInput.oninput = () => {
        message.style.display = 'none';
        noneSearch.style.display = 'flex';
        if (userInput.value == '') {
            message.style.display = 'block';
            noneSearch.style.display = 'none'
        }
    }
}
userItem[1].onclick = () => {
    userBlock.style.display = 'none'
    documWrap(mailBlock)
    for (let i = 0; i < svgItem.length; i++) {
        svgItem[i].onclick = () => {
            boxWrap[i].style.display = 'block'
            boxWrap[i].onclick = () => {
                alertItem[i].style.display = 'none'
            }
        }
    }
}
for (let i = 0; i < friendsItem.length; i++) {
    friendsItem[i].onclick = () => {
        checkd[i].style.background == '' ? checkd[i].style.background = 'url(https://avatanplus.com/files/resources/original/5c8f94f89ff5f16990ddeb4f.png) no-repeat center / 80%' : checkd[i].style.background = null;
    }
}
navItem[0].style = 'background: #454950; color: #fff'
changeClick(navItem, 'background: #454950; color: #fff')

wrap(alertItem[alertItem.length - 1], infoBlockUser)
wrap(infoBlockUser, infoBlockUser)

svg.onclick = () => {
    document.onclick = () => {
        wrapBlock.style.display == 'block' ? (wrapBlock.style.display = 'none', document.onclick = () => false) : wrapBlock.style.display = 'block'
    }
}
userNavItem[0].style = 'border-bottom: 2px solid #fff; color: #fff';
funcChange(userNavItem, userInfoBlock, userServBlock, userFriendsBlock, 'border-bottom: 2px solid #fff; color: #fff', 'block', 'flex')

mailNavItem[0].style = 'background: #454950; color: #fff';
funcChange(mailNavItem, forYou, unread, mention, 'background: #454950; color: #fff', 'block', 'block')