type Brewery = {
    id: string;
    name: string;
    brewery_type: string;
    street: string | null;
    address_2: string | null;
    address_3: string | null;
    city: string;
    state: string;
    county_province: string | null;
    postal_code: string;
    country: string;
    longitude: string | null;
    latitude: string | null;
    phone: string | null;
    website_url: string | null;
    updated_at: string;
    created_at: string;
}


  type State = {
    USState: string,
    breweries: Brewery[]
  }
  
let state = {
    USState: '',
    breweries: []
  }
  
  // Q: Which state are we looking for? state.USState
  // Q: What breweries do we need to display? state.breweries
  
  function getBreweriesForState () {
   fetch (`https://api.openbrewerydb.org/breweries?by_state ${state.USState}`)
   .then(resp => resp.json())
   .then(breweries =>{
    state.breweries = breweries
    render()
   })
  }
  
  function renderHeader () {
    
    let mainEl = document.createElement('main')
    if (mainEl === null) return

    let titelEl = document.createElement('h1')
    titelEl.textContent = 'List of Breweries'

    let searchBarHeader = document.createElement('header')
    searchBarHeader.className = 'search-bar'

    let searchBrewriesForm = document.createElement('form')
    searchBrewriesForm.id = 'search-breweries-form'
    searchBrewriesForm.autocomplete = 'off'

    let searchBrewriesLabel = document.createElement('lebel')
    searchBrewriesLabel.htmlFor = 'search-breweries' 
    

    let searchBrewriesH2 = document.createElement('h2')
    searchBrewriesH2.textContent = 'Search breweries'

    let searchBrewriesInput = document.createElement('input')
    searchBrewriesInput.id = 'search-breweries'
    searchBrewriesInput.name = 'search-breweries'
    searchBrewriesInput.type = 'text'
    
    searchBrewriesLabel.append(searchBrewriesH2)
    searchBrewriesForm.append(searchBrewriesLabel, searchBrewriesInput)
    searchBarHeader.append(searchBrewriesForm)

    mainEl.append(titelEl, searchBrewriesForm)
  }
  
  function renderBreweryList () {
   
    let mainEl = document.createElement('main')
    if (mainEl === null) return

    let articleEl = document.createElement('article')

    let breweriesUl = document.createElement('ul')
    breweriesUl.className = 'breweries-list'

    for (let brewery of state.breweries)
    renderSingleBrewery( brewery, breweriesUl)

    articleEl.append(breweriesUl)
    mainEl.append(articleEl)
  }
  
  function renderSingleBrewery (brewery: Brewery,breweriesUl: HTMLUListElement) {
   
    let singelBreweryLi = document.createElement('li')

    let h2Li = document.createElement('h2')
    h2Li.textContent = brewery.name

    let divLi = document.createElement('div')
    divLi.className = 'type'
    divLi.textContent = brewery.brewery_type


    let addressSectionLi = document.createElement('section')
    addressSectionLi.className = 'address'

    let h3Seciton = document.createElement('h3')
    h3Seciton.textContent = 'Address'

    let numberRdSection = document.createElement('p')
    numberRdSection.textContent = brewery.street

    let strongSection = document.createElement('p')

    let strongP = document.createElement('strong')
    strongP.textContent = `${brewery.city}, ${brewery.postal_code}`

    let phoneLi = document.createElement('section')
    phoneLi.className = 'phone'

    let phoneSection = document.createElement('h3')
    phoneSection.textContent = 'Phone'

    let pSection = document.createElement('p')
    pSection.textContent = brewery.phone ? brewery.phone : "N/A"

    let websiteSectionLi = document.createElement('section')
    websiteSectionLi.className = 'link'

    let aSection = document.createElement('a')
    if (brewery.website_url) {
        aSection.href = brewery.website_url ? brewery.website_url : '#'
    aSection.target = 'blank'
    aSection.textContent = 'Visit website'
    } else {
        aSection.textContent = 'No website'
    }
    

    singelBreweryLi.append(
        h2Li,
        divLi,
        addressSectionLi,
        phoneLi,
        websiteSectionLi
    )

    addressSectionLi.append(
        h3Seciton,
        numberRdSection,
        strongSection
    )
    strongSection.append(strongP)
    phoneLi.append(phoneSection, pSection)
    websiteSectionLi.append(aSection)
    
    
  }
  
  function render () {
    let mainEl = document.querySelector('main')
    if (mainEl === null) return
    mainEl.textContent = ''
  
    renderHeader()
    renderBreweryList()
  }
  
  function listenToSelectStateForm () {
    let formEl = document.querySelector<HTMLFormElement>('#select-state-form')
    formEl?.addEventListener('submit', function (event) {
      event.preventDefault()
      let USState = formEl['select-state'].value
      state.USState = USState
      getBreweriesForState()
      
    })
  }
  
  listenToSelectStateForm()
  render()