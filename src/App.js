
import './App.css';
import React from 'react';


const { useState } = React;


const blocks = [
{
id: 0, 
name: "Pinot Gris Block",
varietal: "Pinot-Gris",
acreage: "1.86",
yearsPlanted: "2003, 2008",
elevation: "710-730ft.",
clones: "146",
rootstock: "101-14",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/pinot1.jpg",  
 },
{
id: 1,
name: "Ten-Acre Block",
varietal: "Merlot",
clones: "181",
rootstock: "RG",
acreage: "0.62",
elevation: "700-720ft.",
yearsPlanted: "2016",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/b1.jpg",  
},
{
id: 2,
name: "Ten-Acre Block",
varietal: "Cabernet-Franc",
clones: "312",
rootstock: "RG",
acreage: "0.9",
elevation: "700-720ft.",
yearsPlanted: "2003, inter-planting in 2020",
 soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/b11.jpg",  
 },
 {
id: 3,
name: "Ten-Acre Block",
varietal: "Petit-Verdot",
clones: "PV28-400, 400",
rootstock: "RG",
acreage: "1",
elevation: "710-730ft",
yearsPlanted: "2003, inter-planting in 2017",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/b21.jpg",   
},
{
id: 4, 
name: "Ten-Acre Block",
varietal: "Pinot-Gris",
clones: "152",
rootstock: "3309",
acreage: "1",
elevation: "710-730ft",
yearsPlanted: "2003",
soilType:"Clay",
picUrl: "https://websnoot.com/vineyard-map/b31.jpg",  
 },
{
id: 5,
name: "Ten-Acre Block",
varietal: "Cabernet-Franc",
clones: "4&1, 312",
rootstock: "101-14, RG",
acreage: "3",
elevation: "710-730ft",
yearsPlanted: "2003, inter-planting in 2019",
soilType: "loam, clay",
highlight: "Home of the Cabernet Franc Reserve",
picUrl: "https://websnoot.com/vineyard-map/b41.jpg",  
 }, 
{
 id: 6,
name: "Ten-Acre Block",
varietal: "Chardonnay",
clones: "76, 96",
rootstock: "101-14, RG, R",
acreage: "3.2",
elevation: "720-730ft.",
yearsPlanted: "2004, inter-plantings in 2018 and 2021",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/b51.jpg",  
 },
{
id: 7,
name: "Viognier Block",
varietal:"Viognier",
acreage: "4.76",
yearsPlanted: "2004, inter-planting in 2015",
elevation: "730-750ft.",
clones: "1, FPS1",
rootstock: "3309",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/vio0.jpg",  
},
{
id: 8,
name: "Sauvignon Blanc Block",
varietal: "Sauvignon-Blanc",
acreage: "1.67",
yearsPlanted: "2017",
elevation: "705-720ft.",
clones: "376, 530",
rootstock: "16C, RG",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/sav1.jpg",  
},
{
id: 9,
name: "New Block",
varietal: "Nebbiolo",
acreage: "2.5",
yearsPlanted: "2021, (2022)",
elevation: "800ft.",
clones: "6, 8",
rootstock: "420A",
soilType:", Clay",
highlight: "This is our newest planting and an addition of our first Italian varietal! Keep a look out for this new wine in a few years.",
picUrl: "https://websnoot.com/vineyard-map/d1.jpg",  
},
{
id: 10,
name: "New Block",
varietal: "Sauvignon-Blanc",
clones: "530",
rootstock: "RG",
acreage: "1.5",
elevation: "800ft",
yearsPlanted: "2019",
 soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/d11.jpg",  
},
{
id: 11,
name: "New Block",
varietal: "Nebbiolo",
acreage: "1",
yearsPlanted: "(2022)",
elevation: "850ft",
clones: "6, 8",
rootstock: "420A",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/dnew0.jpg",  
},
{
id: 12,
name: "New Block",
varietal: "Sauvignon-Blanc",
clones: "530",
rootstock:", RG",
acreage: "0.8",
elevation:", 860 ft.",
yearsPlanted: "(2022)",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/d10.jpg",  
},
{
id: 13,
name: "Mountain Block",
varietal: "Merlot",
acreage: "0.7",
yearsPlanted: "2012",
elevation: "860 ft.",
clones:"VCR-101",
rootstock: "3309",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/mountain1.jpg",
},
{
id: 14,
name: "Mountain Block",
varietal: "Chardonnay",
acreage: "0.75",
yearsPlanted: "2004",
elevation: "860ft.",
clones: "76, 96",
rootstock: "101-14, RG",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/mountain0.jpg",
},
{
id: 15,
name: "Mountain Block",
varietal: "Cabernet-Franc",
acreage: "1",
yearsPlanted:", 2004",
elevation:", 850ft.",
clones:"4",
rootstock: "101-14",
soilType:", Clay",
picUrl: "https://websnoot.com/vineyard-map/mountain20.jpg",
},
{
id: 16,
name: "Mountain Block",
varietal: "Petit-Verdot",
acreage: "1.5",
yearsPlanted:"2004, 2020",
elevation:", 840ft.",
clones: "2, PV-1058",
rootstock:"3309, R",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/mountain21.jpg",
},
{
id: 17,
name: "Mountain Block",
varietal:"Petit-Verdot",
acreage:"1",
yearsPlanted: "2004",
elevation:", 820-840ft.",
clones:"2",
rootstock: "RG",
soilType:"Clay",
picUrl: "https://websnoot.com/vineyard-map/mountain51.jpg",
},
{
id: 18,
name: "Mountain Block",
varietal: "Petit-Manseng",
acreage: "0.73",
yearsPlanted:", 2010, 2014",
elevation:", 820ft.",
clones: "TCVSA(573)",
rootstock: ",101-14, 3309",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/mountain50.jpg",
},
{
id: 19,
name: "Smuggler Block",
varietal: "Cabernet-Franc",
clones: "214",
rootstock: "RG, 16C",
acreage: "1.62",
elevation:", 860-890ft.",
yearsPlanted: "2017, 2021",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/g1.jpg",  
},
{
id: 20,
name: "Smuggler Block",
varietal: "Cabernet-Sauvignon",
clones: "337, 33, 1124",
rootstock: "101-14, RG, Gravesac",
acreage: "12.35",
 elevation: "870-900ft.",
yearsPlanted:", 2005, 2016, 2018, inter-planting in 2021",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/g10.jpg",  
},
{
id: 21,
name: "Smuggler Block",
varietal:"Merlot",
clones: "15, 181",
rootstock: "RG",
acreage: "2.29",
elevation: "850-880ft.",
yearsPlanted: "2005, 2016, 2021, inter-planting in 2014",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/g20.jpg",  
},
{
id: 22,
name: "H Block - Hillside",
varietal: "Merlot",
clones: "343",
rootstock: "RG",
acreage: "0.75",
elevation:", 810-850ft.",
yearsPlanted: "2014",
soilType:", Clay",
picUrl: "https://websnoot.com/vineyard-map/h11.jpg",  
},
{
id: 23, 
name: "H Block - Hillside",
varietal: "Merlot",
clones: "348",
rootstock: "RG",
acreage: "0.75",
elevation: "810-850ft.",
yearsPlanted: "2018, (2022)",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/h0.jpg",  
},
{
id: 24,
name: "I Block",
varietal: "Petit-Manseng",
clones: "TCVSA-573",
rootstock: "3309",
acreage: "0.37",
elevation:", 780-810ft.",
yearsPlanted:", 2014, 2018",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/pm0.jpg",  
},
{
id: 25,
name: "New Block",
varietal: "Sauvignon-Gris",
acreage: "1",
yearsPlanted: "(2022)",
elevation: "850ft",
clones: "6, 8",
rootstock: "420A",
soilType: "Clay",
picUrl: "https://websnoot.com/vineyard-map/dnew0.jpg",  
}
];
const infos = [
  {
    id: 26,
    nameLower: "smuggler-block",
    name: "Smuggler Block",
    icon: "https://img.icons8.com/wired/64/46014D/grapes--v2.png",
    body: <p>Circa 1890, David Pollak's great-grandfather had started three silver mines in Colorado territory. This opperation would lead to the founding of the city of Aspen. One of the silver mines was named the Smuggler, and enjoyed a long tenure of producing silver and valuable metals. The Pollaks chose to honor their ancestor by naming the best vineyard block after this bountiful mine.</p>,
    hImgSrc: "https://websnoot.com/vineyard-map/SmugglerBanner.png",
    fImgSrc1: "https://websnoot.com/vineyard-map/history0.jpg",
    fImgSrc2: "https://websnoot.com/vineyard-map/history1.jpg",
  },
  {
    id: 27,
    nameLower: "farm-history",
    name: "Farm History",
    icon: "https://img.icons8.com/wired/64/b55304/school.png",
    body: <div id="inner-text"><p>There has been farming on this location for over 100 years! Around the turn of the century, William Allwood had a 500-acre farm centered here, with a very large orchard operation. During this time, Allwood was teaching entomology at the Virginia Polytechnic Institute (now Virginia Tech). He developed the first spray-program for orchards in America, and applied his new technology to the orchard here.</p><p>There was also a very famous railroad tunnel being built up the hill at the time. The workers were mostly Irish, and were known to have lived and camped along the edges of the farm property. Through the years, this location has also been a horse and hog farm, and organic vegetable farm.</p><p>In 2003, when David and Margo Pollak bought the property, they had carefully chosen this location to start their new vineyard. The first vines were planted in 2003, and our first vintage was a 2005 Meritage. The Pollak team continues to make award winning estate-grown wines here, and this beautiful farm is a lovely reminder of our incredible agricultural history. Thank you for learning about our vineyard!</p></div>,
    hImgSrc: "https://websnoot.com/vineyard-map/vineyardtop.png",
    fImgSrc1: "https://websnoot.com/vineyard-map/barn1.jpg",
    fImgSrc2: "https://websnoot.com/vineyard-map/barn0.jpg",
  },
  {
    id: 28,
    nameLower: "tasting-room",
    name: "Tasting Room",
    icon: "https://img.icons8.com/wired/64/000000/shop.png",
    body: <div id="inner-text"><p>Our tasting room is open Wednesday through Sunday from 12-5pm. Stop in to learn more about our winery, and try some amazing estate-grown wines! We can also ship to most states, so check out our online store if you can't make it out here soon.</p><p>The winery where we produce all of our wines is located behind the tasting room. We utilize small-lot fermintation to achieve ballance and complexity. Our cellar is under the tasting room, and offers a variety of aging mediums from French-oak to concrete.</p></div>,
    link1: 'http://www.pollakvineyards.com',
    link2: 'https://vinoshipper.com/shop/pollak_vineyards?list=',
    link3: 'http://www.pollakvineyards.com/wines/wine-club/',
    hImgSrc: "https://websnoot.com/vineyard-map/nightconcert.jpg",
    fImgSrc1: "https://websnoot.com/vineyard-map/tasting0.jpg",
    fImgSrc2: "https://websnoot.com/vineyard-map/tasting1.jpg",
  }
];


const Block = ({state, func, prev, next, close}) => {
  
  return ( 
    <div id='main-vineyard'> 

        <div id="copy">
          Built by <a href="https://websnoot.com" target="_blank">Websnoot</a>
        </div>

        {blocks.map((block, index) => ( 
      
        <div id={block.id} key={block.id}>
        
          { /* This div used for css styling via id  */}
          { /* and grape highlighting via name  */}
          <div 
          id={block.varietal+block.id} 
          name={block.varietal}
          onClick={()=>func(index, block.name)}  
          >
         { /* {block.name}  */}
          </div>
          
        <div id={block.name} className={state === block.id ? "show" : "hide"} > 
        <br />
          <div id="close-btn" onClick={close}>X</div>  
        <img id="headerImg" src="https://websnoot.com/vineyard-map/vineyardtop.png"  alt="winery" width="60%" height="70" />
          
          <div className = "control">
            <div className = "prev" onClick={prev}>
              <img src="https://img.icons8.com/ios-filled/50/000000/back.png" alt='icon'/>
              <span>Previous</span>
            </div>
            <div className = "next" onClick={next}>
              <span>Next</span>
              <img src="https://img.icons8.com/ios-filled/50/000000/forward--v1.png" alt='icon'/>
            </div>
          </div>
          
          <div id="blockTxt">
            <h3>{block.name}</h3>
            <p>Varietal: <i>{block.varietal}</i></p>
            {
              block.highlight &&
              <p><b>{block.highlight}</b></p> 
            }
            <p>Years Planted: <i>{block.yearsPlanted}</i></p>
            <p>Acreage: <i>{block.acreage}</i></p>
            <p>Elevation: <i>{block.elevation}</i></p>
            <p>Clones:<i>{block.clones}</i></p>
            <p>Rootstock: <i>{block.rootstock}</i></p>
            <p>Soil Type: <i>{block.soilType}</i></p>
          </div>
         
          <img src={block.picUrl} alt="vineyard pic" id="blockImg"/> 
          
       </div>
          
      </div>  
      ))}
   
      
      
    { /* ---------------------------------  */} 
    { /* MAP METHOD FOR INFO AND BUILDINGS  */}     
        {infos.map((info, index) => ( 
        <div id={info.id} key={info.id}>
        
          { /* This div used for css styling via id  */}
          { /* and grape highlighting via name  */}
          { /* color of icon has to be changed in url as hex????  */}
          <div 
           id={info.nameLower+info.id} 
           name={info.nameLower}
           onClick={()=>func(info.id, info.nameLower)}
          >
         <img src={info.icon} />
          </div>
          
          
        <div id={info.nameLower} className={state === info.id ? "show" : "hide"} > 
          <br /> 
          <div id="close-btn" onClick={close}>X</div>
          <img className="info-header" src={info.hImgSrc} alt="picture" />
            <h3>{info.name}</h3>
          <div id="info-body">
	          {info.body}
            {info.link1 &&
             <div className="info-links"> 
              <a href={info.link1} target='_blank'>Visit Our Website</a>
              <a href={info.link2} target='_blank'>View Our Online Store</a>
              <a href={info.link3} target='_blank'>Join Our Wine Club!</a>
             </div>
            }
          </div>
	  <footer>
	    <img src={info.fImgSrc1} alt="picture" />
	    <img src={info.fImgSrc2} alt="picture" />	
	  </footer>
        </div>

       </div>	  
      ))}
 
   </div> 
  );
    
};





const Grapes = ({me}) => {
  //rework this to .map() buttons instead of coding e/o.?
  //create another array for titles, or use prop in blocks array?
  return ( 
    
    <div className="grapes">  
      <div className="grapeBtn" title='Merlot' onClick={me}>Merlot</div>
      <div className="grapeBtn" title='Cabernet-Franc' onClick={me}>Cab Franc</div>
      <div className="grapeBtn" title='Cabernet-Sauvignon' onClick={me}>Cab Sauv</div>
      <div className="grapeBtn" title='Viognier' onClick={me}>Viognier</div>
      <div className="grapeBtn" title='Petit-Verdot' onClick={me}>Petit Verdot</div>
      <div className="grapeBtn" title='Sauvignon-Blanc' onClick={me}>Sauv Blanc</div>
      <div className="grapeBtn" title='Sauvignon-Gris' onClick={me}>Sauv Gris</div>
      <div className="grapeBtn" title='Pinot-Gris' onClick={me}>Pinot Gris</div>
      <div className="grapeBtn" title='Nebbiolo' onClick={me}>Nebbiolo</div>
      <div className="grapeBtn" title='Chardonnay' onClick={me}>Chardonnay</div>
      <div className="grapeBtn" title='Petit-Manseng' onClick={me}>Petit Manseng</div>
    </div>
    
  );
};



const Vineyard = () => {
  
    const [state, setState] = useState(null);
  
    const clickHandle = (blockId, blockName) => {
     if (state != blockId) {
       setState(blockId);
     } else if (state === blockId) {
       setState(0);
     } else {
       setState(0);
     }
     // REJECTED LOGIC 
      // document.getElementById(blockId).className="on";
      // state === blockId ? active=true : active=false;
      
      console.log('cur index is: ' + state);
      console.log('the current name is: ' + blockName);
      // console.log(active);
  };
  
  const prevClick = () => {
   document.getElementById(state).className="off";    document.getElementById(blocks[state].name).className="hide";
    
   if (state < 1) {   
    setState(blocks.length - 1);
      console.log('the current index is: ' + state);
     // console.log(blocks[state].name);
     document.getElementById(state).className="on";  
   } else {
     setState(state - 1);
    // console.log('the current index is: ' + state);
    // console.log(blocks[state].name);
      document.getElementById(state).className="on";
   } 
  };
  function nextClick() {
  document.getElementById(state).className="off";    document.getElementById(blocks[state].name).className="hide";
    
    if (state === blocks.length - 1) {
      setState(0);
      console.log('the current index is: '  + state);
    } else {
      setState(state + 1);
      console.log('the current index is: ' + state);
    }

  };
  
 
  
  function findVarietal(e) {
  //let cluster = document.querySelectorAll('[name="Merlot"]');
    let hit = e.target.title;
    console.log(hit);
    let cluster = document.querySelectorAll('[name='+hit+']');
    //puts into NODE LIST
      console.log(cluster);
    //apply className='on' to each
    cluster.forEach((grape)=>{
    if (grape.id=='Viognier7' && grape.style.borderRight!='180px solid yellow') {
      grape.style.borderRight = '180px solid yellow';
    }else if (grape.id=='Viognier7' && grape.style.borderRight!='180px solid green') {
      grape.style.borderRight = '180px solid green';
    }else if (grape.style.backgroundColor !='yellow' && grape.id!='Viognier7') {
      grape.style.backgroundColor='yellow';
    }else if (grape.style.backgroundColor!='green' && grape.id!='Viognier7'){
      grape.style.backgroundColor='green';
    }
    });
    if (e.target.style.backgroundColor !='yellow') {
      e.target.style.backgroundColor='yellow';
    }else{
      e.target.style.backgroundColor='lightgreen';
    };

  };
      
  function close(e) {
     e.target.parentNode.className = "hide";
     setState(null);
  }    
  
  return (
    <div id="range">
      <div id="pond"></div>
      <div id="logo"></div>
      <Block state={state} func={clickHandle} prev={prevClick} next={nextClick} me={findVarietal} close={close} />
      <Grapes me={findVarietal} />
    </div>  
  );
};






function App() {
  return (
    <Vineyard />
  );
}
export default App;
