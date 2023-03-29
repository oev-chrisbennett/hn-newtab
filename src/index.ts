/**
 * @description Changes title and comments links to open in a new tab
 */
const changeLinksToOpenInNewTab = (): void => {
    const titleLinks = document.querySelectorAll('span.titleline > a:first-child')
    const commentLinks = document.querySelectorAll('span.subline > a:last-child')
    const newTablinks = [...titleLinks, ...commentLinks]

    newTablinks.forEach((link) => {
        link.setAttribute('target', '_blank')
        link.setAttribute('rel', 'noopener noreferrer')
    })
}

document.addEventListener('DOMContentLoaded', changeLinksToOpenInNewTab)
