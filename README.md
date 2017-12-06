# Data Visualization: Real Estate Map Project

Repository of Data visualization project at EPFL involving US housing market data.

Team:    
* [Juraj Korcek]()    
* [Mateusz Paluchowski](https://github.com/PaluchowskiMatthew)    
* [Christian Tresch](https://github.com/raccc)    

![Tilt-shift houses](https://i.ytimg.com/vi/9BBZCfQcGus/maxresdefault.jpg)

##### Table of Contents  
[Overview](#Overview)  
[Motivation](#Motivation)  
[Target Audience](#Target_audience)    
[Related Work and Inspiration](#Related_work_and_inspiration)  
[Questions To Answer](#Questions_to_answer)    
[Dataset](#Dataset)  
[Exploratory Data Analysis](#Exploratory_data_analysis)    
[Designs & Deviations](#Designs_&_Deviations)
[Implementation](#Implementation)  
[Evaluation](#Evaluation)  


## Overview <a name="Overview"/>    

The point of this data visualization is to present US house market time data series, spanning through last 20 years.

## Motivation <a name="Motivation"/>    

Insights on changes in the housing market in order to help potential investment decisions in the future based on historical data.

   
## Target Audience <a name="Target_audience"/>

Real estate investors / Market analysts.

    
## Related Work and Inspiration <a name="Related_work_and_inspiration"/>

Inspired by www.trulia.com and interest in real estate market in general. Moreover, this visualization was particularly inspirational.

![NYC inspiration](https://imgs.6sqft.com/wp-content/uploads/2015/07/20212442/New-york-city-population-day-versus-night.jpg)
  
## Questions To Answer <a name="Questions_to_answer"/>   

What am I trying to show in the data viz?    
Changes in the housing prices of the US between 1996-04 and 2017-09.
    
## Dataset <a name="Dataset"/>    
Time series representing prices of household in various US-located zip codes/counties, spanning across aforementioned dates with one month resolution.
[https://www.zillow.com/research/data/](https://www.zillow.com/research/data/)
   
## Exploratory Data Analysis <a name="Exploratory_data_analysis"/>     
Initial Data Analysis consisted of quick and rudimentary data check performed in python, with use of Jupyter Notebooks. Basic histogram plotting amount of data points for each state was performed, as well sanity check for amount of NaN values though the spanning dates for each household. Last but not least, we plotted data in time on simple 2D line plot (for each state) in order to make sure there is 'some story to tell', which we verified is the case, however we want the reader to see it for him/herself.
    
## Designs & Deviations <a name="Designs_&_Deviations"/>    

#### Initial design 
Initial design of the visualisation considered using D3.js + Leaflet.js as it is the most common tool for map based visualizations. In order to achieve the 3D bars effect, OSMBuildings JavaScript library was used, however with partial success. As the name of the library suggests, it is designed to visualise 3D buildings on a Leaflet map, using provided TopoJson of the buildings. We tried expanding this approach to '3D-fing' entire states, however we stumbled upon the issue where 3D bars were only visible up to certain zoom levels of the map and disappeared in full country perspective. This issue would require a deep dive into both Leaflet.js and OSMBuildings frameworks, in order to fix it should that be possible, thus we decided to find some other approach.

### Second Design
In our second design we considered using pure D3.js and provided topology in TopoJson format. It would require from us to write a custom TopoJson modifier such that each state/county could be '3D-fied' in a way such that it would be 'lifted' as a bar above all the rest, given the current projection on the map. Such solution would be labour intensive and potentially visually unappealing if done incorrectly, thus we quickly decided to use another approach.

### Third Design
In our third - final - design we settled on using D3.js alongside a dedicated 3D framework Three.js.
 
## Implementation <a name="Implementation"/>     

*Describe the intent and functionality of the interactive visualizations you implemented. Provide clear and well-referenced images showing the key design and interaction elements.*
    
## Evaluation <a name="Evaluation"/>

*What did you learn about the data by using your visualizations? How did you answer your questions? How well does your visualization work, and how could you further improve it?*

Being inspired by the provided NYC population map, initially we wished to visualize each zip code, however due to performance issues we settled on using counties instead. Zip code TopoJson simply consists of way too many arcs and any transformations are CPU intensive resulting in chopped animations. 
