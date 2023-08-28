const CardLode = async () => {
    const res = await fetch (`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    const aiNews = data.data.tools; 
    displayItems (aiNews);
}
CardLode()



const displayItems = (data) => {

    data.forEach(element => {

        const CardContainer = document.getElementById ('card-Container');
        const div = document.createElement ('div'); 
        div.innerHTML = `
        <div  onclick="idDataLode('${element.id}')" class=" rounded-md lg:h-[400px] card-compact bg-base-100 border-2 p-3">
                <figure><img src="${element.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">Features</h2>
                  <p>1. ${element.features[0]}</p>
                  <p>2. ${element.features[1]}</p>
                  <p>3. ${element.features[2]}</p>
                    <hr class="">   
                    <div class="flex justify-between items-center">
                        <div class="space-y-3">
                             <h1 class="text-base font-bold">${element.name}</h1>
                             <h1>Published Date: ${element.published_in}</h1> 
                        </div>
                        <div >
                            <div class=" h-7 w-7 rounded-full relative bg-red-100">
                                <i class="fa-solid fa-arrow-right absolute top-2 left-2 text-red-500"></i>
                            </div>
                        </div>
                    </div>     
                </div>
              </div>
        `;
        CardContainer.appendChild (div)

        // console.log (element)
    });
    
}





const idDataLode = async (id) => {
    const res = await fetch (`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json(); 
    // console.log (data.data)
    display (data.data)
}
const display = (phone) => {
    console.log (phone)
    showdata.showModal()
}
