
type Brewery = {
    address_2: null;
    address_3: null;
    brewery_type: string;
    city: string;
    country: string;
    county_province: null;
    created_at: string;
    id: number;
    latitude: string;
    longitude: string;
    name: string;
    obdb_id: string;
    phone: string;
    postal_code: string;
    state: string;
    street: string;
    updated_at: string;
    website_url: string;
}

const breweries = [
    {
      address_2: null,
      address_3: null,
      brewery_type: 'large',
      city: 'San Diego',
      country: 'United States',
      county_province: null,
      created_at: '2018-07-24T00:00:00.000Z',
      id: 8041,
      latitude: '32.714813',
      longitude: '-117.129593',
      name: '10 Barrel Brewing Co',
      obdb_id: '10-barrel-brewing-co-san-diego',
      phone: '6195782311',
      postal_code: '92101-6618',
      state: 'California',
      street: '1501 E St',
      updated_at: '2018-08-23T00:00:00.000Z',
      website_url: 'http://10barrel.com'
    }
  ]

  type State = {
    USState: string,
    Breweries: Brewery[]
  }
  
let state = {
    USState: '',
    breweries: []
  }
  
  // Q: Which state are we looking for? state.USState
  // Q: What breweries do we need to display? state.breweries
  
  function getBreweriesForState () {
   fetch ('ttps://api.openbrewerydb.org/breweries?by_state ${state.USState}')
   .then(resp => resp.json())
   .then(breweries =>{
    state.breweries = breweries
    render()
   })
  }
  
  function renderHeader () {
    // <h1>List of Breweries</h1>
    // <header class="search-bar">
    //   <form id="search-breweries-form" autocomplete="off">
    //     <label for="search-breweries"><h2>Search breweries:</h2></label>
    //     <input id="search-breweries" name="search-breweries" type="text" />
    //   </form>
    // </header>

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
    // <article>
    //   <ul class="breweries-list">
    //   </ul>
    // </article>

    
    let mainEl = document.createElement('main')
    if (mainEl === null) return

    let articleEl = document.createElement('article')

    let breweriesListUl = document.createElement('ul')
    breweriesListUl.className = 'breweries-list'
  }
  
  function renderSingleBrewery () {
    //     <li>
    //       <h2>Snow Belt Brew</h2>
    //       <div class="type">micro</div>
    //       <section class="address">
    //         <h3>Address:</h3>
    //         <p>9511 Kile Rd</p>
    //         <p><strong>Chardon, 44024</strong></p>
    //       </section>
    //       <section class="phone">
    //         <h3>Phone:</h3>
    //         <p>N/A</p>
    //       </section>
    //       <section class="link">
    //         <a href="null" target="_blank">Visit Website</a>
    //       </section>
    //     </li>
    let singelBreweryLi = document.createElement('li')

    let h2Li = document.createElement('h2')
    h2Li.textContent = 'Snow Belt Brew'

    let divLi = document.createElement('div')
    divLi.className = 'type'
    divLi.textContent = 'micro'


    let addressSectionLi = document.createElement('section')
    addressSectionLi.className = 'addres'

    let h3Seciton = document.createElement('h3')
    h3Seciton.textContent = 'Address'

    let numberRdSection = document.createElement('p')
    numberRdSection.textContent = 'brewery.street'

    let strongSection = document.createElement('p')

    let strongP = document.createElement('strong')

    let phoneLi = document.createElement('section')

    let phoneSection = document.createElement('h3')

    let pSection = document.createElement('p')

    let websiteSectionLi = document.createElement('section')

    let aSection = document.createElement('a')

    singelBreweryLi.append()


    
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