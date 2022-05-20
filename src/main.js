const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const hashMap = [
    {logo: 'A', url: 'https://www.acfun.cn/'},
    {logo: 'B', url: 'https://www.bilibili.com/'},
]
hashMap.forEach((node)=>{
    const $li = $(`
    <li>
        <a href="${node.url}">
            <div class="site">
                <div class="logo">${node.logo}</div>
                <div class="link">${node.url}</div>
            </div>
        </a> 
    </li>
    `).insertBefore($lastLi)
})

$('.addButton').on('click', ()=>{
    let url = window.prompt("请输入要添加的网址：")
    if(url.indexOf('http') !== 0){
        url = 'https://' + url
    }
    hashMap.push({
        logo: url[0],
        url: url
    })
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node)=>{
        const $li = $(`
        <li>
            <a href="${node.url}">
                <div class="site">
                    <div class="logo">${node.logo}</div>
                    <div class="link">${node.url}</div>
                </div>
            </a> 
        </li>
        `).insertBefore($lastLi)
    })
})
