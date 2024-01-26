export const StringHTML = ({ htmlString }) => {
    //console.log(htmlString)
    return <div dangerouslySetInnerHTML={{__html: htmlString}} ></div>
}