let body = document.getElementById("body")

function writer(e){
    body.innerHTML += `
            <div class="m-1 flex justify-center">
            <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                    <img class="rounded-t-lg" src="${e.image}" alt="" />
                </a>
                <div class="p-6">
                    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        ${e.name}
                    </h5>
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    ${e.gender}
                    </p>
                    <button onclick="getById(${e.id})" type="button">Go to detail's</button>
                </div>
            </div>
        </div>
    `
}

fetch('https://rickandmortyapi.com/api/character/',{method:"GET"})
.then((resp)=> resp.json())
.then(data => data.results.forEach(e=> writer(e)))


function getById(id){
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(resp => resp.json())
    .then(data => {
        body.innerHTML = ''
        writer(data)
    })
}





