// get stringify data from pug
var data = !{imageListStringy};

// parse the data back into json
//var imageList = JSON.parse(data);

//get all popUpImageLink and save them into an array
var popUps = document.getElementsByClassName('popUpImageLink')

for (var i= 0 ; i < popUps.length; i++){
    //set image index to each link
    popUps[i].setAttribute('image-index',i);
    popUps[i].addEventListener('click',popUpClicked);
}
function popUpClicked(event){
    var image = event.currentTarget;
    var index = image.getAttribute('image-index');

    var popUpImageTitle = document.getElementById('modalLabel');
    var popUpImageSource = document.getElementById('modalImage');
    //var popUpImageMetaData = document.getElementById('metaData');

    popUpImageTitle.value = imageList[index].description;
    popUpImageSource.src = imageList[index].urls.regular;
    popUpImageSource.alt = imageList[index].alt_description;

}