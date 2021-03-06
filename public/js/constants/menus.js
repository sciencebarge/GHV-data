export const MENUS = {
    MAIN_MENU_LINKS: [{
            label: 'Climate Monitoring',
            action: 'CLIMATE_MENU_LINKS',
        },
        {
            label: 'Impact on Biotic Communities',
            action: 'BIOTIC_MENU_LINKS',
        },
        {
            label: 'Impact on Water Cycle & Resources',
            action: 'WATER_MENU_LINKS',
        }
    ],
    CLIMATE_MENU_LINKS: [{
            label: 'Real Time Climate Monitoring',
            action: 'REAL_TIME_CLIMATE_TRACKING_LINKS',
        },
        {
            label: 'Polar and Glacial Ice',
            action: 'POLAR_ICE_LINKS',
        },
        {
            label: 'Sea Level Rise',
            action: 'SEA_LEVEL_RISE_LINKS',
        },
        {
            label: 'Climate vs. Weather',
            action: 'CLIMATE_WEATHER_LINKS',
        },
        {
            label: 'Global Temperatures and Greenhouse Gas Concentration',
            action: 'GLOBAL_TEMP_GG_LINKS',
        },
        {
            label: 'Climate Change and Extreme Weather Events',
            action: 'CC_EXTREME_WEATHER',
        }
    ],
    BIOTIC_MENU_LINKS: [{
            label: 'Climate Change and Agriculture',
            action: 'CC_AGRICULTURE_LINKS',
        },
        {
            label: 'Climate Change and Forest Cover',
            action: 'CC_FOREST_COVER_LINKS',
        },
        // {
        //     label: 'Climate Change and Species Ranges',
        //     action: 'CC_SPECIES_RANGES_LINKS',
        // },
        {
            label: 'Climate Change and Disease',
            action: 'CLIMATE_CHANGE_DISEASE_LINKS',
        }
    ],
    WATER_MENU_LINKS: [{
            label: 'Deluge',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/Deluge.mp4'
            }
        },
        {
            label: 'Drought',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/Drought.mp4'
            }
        },
        {
            label: 'Freshwater Availablity and Consumption',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/water/',
                    imgs: ['B---Freshwater-Availability-in-US.png']
                }
            }

        },
        {
            label: 'Water Contamination',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/water/',
                    imgs: [
                        'C---Climate-Change-_-Water-Contamination.jpg'
                    ]
                }
            }
        },
        {
            label: 'Water and Energy',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/water/',
                    imgs: [
                        'D---waterconsumption-(slideshow).png'
                    ]
                }
            }
        }
    ],
    REAL_TIME_CLIMATE_TRACKING_LINKS: [{
            label: 'Why Climate Data Matters (IRI Video)',
            action: 'OPEN_PAGE',
            payload: {
                youtube: 'https://www.youtube.com/embed/-G8jy5ldiTU'
            }
        },
        {
            label: 'NASA Climate Time Machine: Vital Signs of the Planet',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://climate.nasa.gov/interactives/climate-time-machine'
            }
        },
        {
            label: 'Climate History in Ice Cores (NOVA Video Segment: Extreme Ice)',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/NOVA-National-Ice-Core-Lab-Video.mp4'
            }
        }
    ],
    POLAR_ICE_LINKS: [{
            label: 'Images of Change NASA Glacier Melt',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://climate.nasa.gov/images-of-change?id=376#376-muir-glacier-melt-alaska'
            }
        },
        {
            label: 'Antartic & Greenland Land Ice',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    imgs: ['Antarctica.png', 'Greenland.png', 'west-antarctica.jpg'],
                    baseUrl: 'public/imgs/polar-ice/'
                }
            }
        },
        {
            label: 'National Snow & Ice Data Center',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://nsidc.org/data/tools/arctic-sea-ice-chart/'
            }
        }
    ],
    SEA_LEVEL_RISE_LINKS: [{
            label: 'If Antartica Melted: National Geographic Maps',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/antarctica-melted/',
                    captions: [
                        'North America\'s new coastline after land ice melt causes sea level to rise 216 feet would lose the eastern\
                         seaboard, nearly all of Florida, and the Gulf Coast. Scientists say with limited global warming, it would take 5,000 \
                         years for this ice to melt. With a runaway greenhouse effect, however, that timeline could shrink with the ice cover.',
                         'The major cities of Australia and South Pacific, where 4 out of 5 people live, would \
                          be under water. Some of Australia\'s desert would be replaced with an inland sea.',
                          'In Europe, London, Venice, Stockholm, and St. Petersburg, would be swallowed up by the sea, including most of Denmark and the Netherlands.',
                          'South America\'s Amazon and Paraguay Rivers would become ocean inlets. Only the more mountainous regions of Central America would remain.',
                          'Antarctica looks very different without ice. East Antarctica has survived earlier warming periods, and has been getting more snow in recent decades.\
                           West Antarctica, on the other hand is vulnerable and has experienced accelerated melting. \
                          In 2017, a sheet the size of Delaware broke off into the ocean. Luckily, most of this ice is already on submerged bedrock and would not cause as much sea level rise.',
                          'Africa\'s coastline would change the least, though Mauritania, Senegal, Sierra Leone, and Egypt would be radically affected. \
                          Also, without the albedo effect (ice\'s white surface reflecting the sun\'s light and heat), the African continent would have oppressively hot temperatures.',
                          'The greatest population centers along coastal India, China, and Bangladesh, where over a billion people live, would be underwater. \
                           Tokyo, Japan would be a distant memory. Even a 6 foot sea-level rise would impact the planet\'s coastal communities greatly. Can we reverse the trend in time?'
                    ],
                    imgs: [
                            'canada.jpg',
                            'australia.jpg',
                            'europe.jpg',
                            'sa.jpg',
                            'sp.jpg',
                            'africa.jpg',
                            'asia.jpg'
                     ]
                }
            }
        },
        {
            label: 'NOAA Interactive Map: Sea Level Rise and Mitigation',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://coast.noaa.gov/slr/#/layer/slr'
            }
        },
        {
            label: 'Sea Level Rise Local Scenarios: Scenic Hudson Interactive Map',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://scenichudson.org/slr/mapper#block-menu-block-1'
            }
        }
    ],
    CLIMATE_WEATHER_LINKS: [{
            label: 'What Is Climate? (Video by Utah Education Network Climate Science Series)',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/ClimateScience-EP2-final360.mp4'
            }
        },
        {
            label: 'Trend and Variation (Climate versus Weather)',
            action: 'OPEN_PAGE',
            payload: {
                youtube: 'https://www.youtube.com/embed/e0vj-0imOLw'
            }
        }
    ],
    GLOBAL_TEMP_GG_LINKS: [{
            label: 'The Greenhouse Effect',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/greenhouse-effect/',
                    imgs: ['Greenhouse-Gasses.jpg', 'The-Greenhouse-Effect.jpg'],
                    captions: ['Earth\'s atmosphere consists of a mixture of gases. The composition is 78% Nitrogen, 21% Oxygen, .9% Argon, and 2% other variable gases. Scientists study these variable gases especially because their heat trapping potential. They include Carbon Dioxide, Methane, Nitrous Oxide, and Sulfur Hexaflouride, as well as Ozone (O3), and Water Vapor.', 'Greenhouse Gases allow sunlight through to be absorbed or reflected by the sun, but trap some of the re-radiated long waves from leaving our atmosphere, thereby warming our planet. Without greenhouse gases, Earth would be cold and uninhabitable, like Mars. However, modern agriculture, industry, and energy production has greatly increased greenhouse gas concentration. 99% of scientists agree that this human activity has caused accelerated global warming (climate change).']
                }
            }
        },
        {
            label: 'Global Temperature Time-lapse 1884-2012 (NASA Scientific Visualization Studio)',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/Global-Temp-Interactive-Map.mp4'
            }
        },
        {
            label: 'Historical CO2 and Global Temperature Correlation',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/c02-temp-correlation/',
                    imgs: ['CO2-and-Temperature-Corr.jpg'],
                    captions: ['Scientists measure trapped gases and oxygen isotopes in annual layers of ice core samples to get data on CO2 concentrations in the atmosphere and global temperatures over the past 800,000 years. Graphing the data presents a strong direct correlation between the two, and strongly suggests that their relationship might be what is driving the current warming trend on Earth.']
                }
            }
        },
        {
            label: 'Modern Era CO2 and Temperature Correlation (1880-2010)',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/modern-era-c02-temp/',
                    imgs: ['Modern-Era-global-temp-and-co2-NOAA-source.gif', 'Figure1.jpg'],
                    captions: ['Blue bars represent cooler than 1880-2010 average temperature (read bottom of bar) and red bars represent warmer than average (read top of bars). Black line represents CO2 concentrations in parts per million. Climate scientists have warned for decades that we should not surpass the 400 ppm threshold to keep the warming trend in check. However, in September 2016, we permanently crossed the 400ppm threshold. 2016 was the hottest year ever recorded in human history.']
                }
            }
        },
        {
            label: 'NASA Video Comparing Natural & Human Factors',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/NASA-Comparing-Natural-and-Human.mp4'
            }
        }
    ],
    CC_EXTREME_WEATHER: [{
            label: 'Extreme Heat Waves',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/extreme-heatwave/',
                    imgs: ['A---Deadliest-Heat-Waves.jpg',
                        'B---Western-Europe-Heat-Wave-2006.jpg',
                        'C---Russia-Heat-Wave-July-2010.png',
                        'C1---Russian-Heat-Wave-July-2010-NOAA-Anomalies.png',
                        'C2---Russian-Heat-Wave-July-2010-_-Wildfire.jpg',
                        'C3---Russia-Heat-Wave-July-2010-Wildfires.png',
                        'C4---Russia-Heat-Wave-July-2010-Wildfires2.jpg',
                        'D---India-Heat-Wave-May-2015.png',
                        'D1---India-Heat-Wave-May-2015-Dried-Pond.jpg',
                        'D2---India-Heat-Wave-May-2015-Melting-Roads-(CNN).jpg',
                        'D3---India-Heat-Wave-May-2015-Men-Sleep-on-Road-Divider-in-Delhi.jpg',
                        'E---Western-US-Heat-Wave-June-2017.jpg'
                    ],
                    captions: [
                        'Global warming has caused more temperature modulation over land, increasing the incidence of extreme heat waves. The five deadliest in recorded human history have all taken place in the last two decades.',
                        'The 2003 European heatwave led to the hottest summer on record in Europe since at least 1540. In late June 2006, another heatwave broke many of the 2003 records for the UK, Belgium, Ireland, the Netherlands, and Germany. These events, once occurring 1-in-30 years, are now expected 1-in-3.5 years.',
                        ' In July 2010, Moscow and western Russia experienced record-breaking temperatures (up to 12 degrees Celsius higher than normal) that led to severely dry land.',
                        'The whole Northern Hemisphere experienced much higher than average temperatures in 2010, but Russia was the hardest hit. Between scorching temperatures, extreme drought causing wildfire, and resulting poor air quality, over 10,000 deaths may be attributed to this heatwave in Russia alone.',
                        'By the end of the heatwave, Russia\'s forests were so desiccated, that wildfire ran rampant through September in the forests to the west, causing $15 billion in damages, and adding to the death-toll started by the heatwaves.',
                        'All told, over 740,000 acres of forests burned.',
                        'All told, over 740,000 acres of forests burned.',
                        'In May 2015, India saw temperatures exceeding 115 degrees Fahrenheit. This map shows hottest daytime high temperature during the week May 24-30, 2015. NOAA Climate.gov map by Fiona Martin, based on interpolated weather station data provided by the India Meterological Department.',
                        'Sheep being herded across a dried-up pond on the outskirts of Delhi. Farmers and laborers were hottest hit. Crops were ravaged by the heat and thousands of livestock died out in pasture.',
                        'Temperatures in the cities were high enough to melt the blacktop.',
                        'Heatwaves disproportionately affect the marginalized in society. Poorer people haven\'t the amenities, such as sufficient shelter, ice water, and air-conditioning, to escape extreme temperatures. Sick and elderly are more susceptible to heat stroke and dehydration. Some reports say that over 2300 people died in India from the heatwave.',
                        'The U.S.A. has also experienced more frequent and extreme heatwaves in the past few decades. Summer 2017 brought temperatures to southern California and Arizona that exceeded 125 degrees Fahrenheit, bringing brownouts from excessive A/C demand on the grid, buckled roads, temporary business closures, and over 12 deaths.',
                    ]
                }
            }
        },
        {
            label: 'NOAA Drought Monitor (Animated Maps)',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/extreme-draught/',
                    imgs: ['US-Drought-Index-2011-2012.gif',
                        'US-Drought-Index-2014-2015.gif'
                    ],
                    captions:[
                        '2011-2012 brought extreme drought to the Southwest, especially Texas, and Great Plains. Texas suffered $7.62 billion in crop and livestock losses, with nearly 1/3 of cattle dying in the field from dehydration. Wildfires spiked: 23,835 fires burned more than 3.8 million acres and destroyed 2,763 Texas homes over 2011. At its peak in August 2012 the drought covered approximately 81% of the United States. Corn prices shot up 35% due to crop failure.',
                        'The drought in the western coast hit critical mass in 2014, with the Governor Brown declaring California in a state of emergency. California\'s ancient forests, a national treasure, were left weakened and vulnerable. During the 5-year drought period, California greatly depleted groundwater reserves for agriculture and industry, causing the land to sink in places, seawater intrusion in others, and water allocations to be reduced all over.'
                    ]
                }
            }
        },
        {
            label: 'Billion Dollar Weather Events',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/billion-dollar-weather/',
                    imgs: ['A---billion_dollar_events_bystate_lrg.png',
                        'B---Billion-Dollar-Events-since-2008.jpg',
                        'C---natural-catastrophies.jpg',
                        'D--weather-catastrophies.png'
                    ],
                    captions: [
                        'This NOAA map shows the number of billion-dollar disasters affecting each U.S. state between 1980 and 2016. Deeper color concentration illustrates greater number of disasters. Total number of disasters equals 203. Image adapted by Climate.gov, based on NCEI originals by Adam Smith.',
                        'Map showing the number of times each state has been part of a billion-dollar weather or climate disaster of any type from 1980-2016. The darker the red, the greater the number of events the state has experienced. U.S. South/Central and Southeast regions experienced a higher frequency of billion-dollar disaster events than any other region. Map adapted by Climate.gov from originals provided by NOAA NCEI.',
                        'Around the world, natural catastrophes are on the rise. Many can be directly classified as climatological in nature, such as drought, heatwaves, and forest fires. The increase in hydrological events, such as hurricanes and flood-rains, may be influenced by climate change, but it is harder to prove direct causation.',
                        'Costly weather-related disasters have had a crippling effect on major economies around the world. Economic losses (property damage, loss of goods and services, infrastructure, communication lines) have increased even when the number of events have decreased because the severity of each extreme weather event has gone up.'
                    ]
                }
            }
        },
        {
            label: 'Heavy Precipitation',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/heavy-precipitation/',
                    imgs: ['A---CS_extreme_precip_index_13263_V9.png',
                        'B---CS-Water_flood_trends_v5.png',
                        'C---heavy-precipitation.png',
                        'D---CS_winter_storms_v4.png'
                    ],
                    captions: [
                        'One measure of a heavy precipitation event is a 2-day precipitation total that is exceeded on average only once in a five-year period, also known as a once-in-five-year event. As this extreme precipitation index for 1901-2012 shows, the occurrence of such events has become much more common in recent decades. Changes are compared to the period 1901-1960, and do not include Alaska or Hawai‘i. The 2000s decade (far right bar) includes 2001-2012. (Figure source: adapted from Kunkel et al. 20131).',
                        'Trend magnitude (triangle size) and direction (green = increasing trend, brown = decreasing trend) of annual flood magnitude from the 1920s through 2008. Flooding in local areas can be affected by multiple factors, including land-use change, dams, and diversions of water for use. Most significant are increasing trends for floods in Midwest and Northeast, and a decreasing trend in the Southwest.(Figure source: Peterson et al. 20131).',
                        'The number of "extreme precipitation" events around the U.S.A. are on the rise, especially in the Northeast, Midwest, Southeast, and Great Plains. (Figure source: adapted from Kunkel et al. 20131).',
                        'Though snowfall in the Northern Hemisphere has decreased overall due to increasing global temperatures, the intensity of winter events has increased in many areas, because a warmer atmosphere can hold more moisture. The bar for each decade represents the difference from the long-term average. Storm frequencies have increased in middle and high latitudes, and storm intensities have increased in middle latitudes. (Figure source: updated from CCSP 2008).'
                    ]
                }
            }
        },
        {
            label: 'Hurricane Sandy The jury is out on the climate change connection. (NOVA Video)',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/6V-Hurricane-Sandy-and-Climate-Change-Connection.mp4'
            }
        }
    ],
    CC_AGRICULTURE_LINKS: [{
            label: 'USDA Plant Hardiness Zone Map',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/zone-hardness/',
                    imgs: ['zone-hardiness-changes.png']
                }
            }
        },
        {
            label: 'Projected Crop Yields 2050',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/climate-crop/',
                    imgs: ['climate_and_crop_yields_2-World-Resource-Institute.jpg']
                }
            }
        },
        {
            label: 'Resilience for Farmers',
            action: 'OPEN_PAGE',
            payload: {
                youtube: 'https://www.youtube.com/embed/4ieM_zKB6U4'
            }
        }
    ],
    CC_FOREST_COVER_LINKS: [{
            label: 'Increase in Wildfires',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/increase-wildfires/',
                    imgs: [
                        'A---Increase-in-Forest-Fire.jpg',
                        'A1---Forest-Fires-are-Getting-Bigger.jpg',
                        'A2---Acreage-Burned.png'
                    ]
                }
            }
        },
        {
            label: 'Global Deforestation',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/global-deforestation_climate-change/',
                    imgs: [
                        'B1--Deforestation-and-Climate-Change.jpg',
                        'B2---deforestation-and-climate-change-mitigation.jpg',
                        'B3---Deforestation-Effects.jpg',
                        'B4---Causes-of-Deforestation.jpg'
                    ]
                }
            }
        },
        {
            label: 'Forests: Lungs of the Earth',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/The-Forests-Lungs-of-the-Earth-(NASA-Imaging-of-CO2-and-Photosynthesis).m4v'
            }
        },
        {
            label: 'Projected Shifts in Forest Types',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/projected-shift/',
                    imgs: ['Projected-Shift-in-Forest-Type.jpg']
                }
            }
        }
    ],
    // CC_SPECIES_RANGES_LINKS: [{
    //         label: 'Species Range Change Interactive',
    //         action: 'OPEN_PAGE',
    //         payload: {
    //             iframe: 'http://nca2014.globalchange.gov/highlights/report-findings/ecosystems-and-biodiversity#graphic-31940'
    //         }
    //     },
    //     {
    //         label: 'Bees are Feeling the STING of Climate Change',
    //         action: 'OPEN_PAGE',
    //         payload: {
    //             iframe: 'https://svs.gsfc.nasa.gov/cgi-bin/details.cgi?aid=10481'
    //         }
    //     }
    // ],
    CLIMATE_CHANGE_DISEASE_LINKS: [{
            label: 'Climate Change & Human Health',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/climate-change-human-health/',
                    imgs: ['A---Climate-Change-&-Human-Health-(CDC-image).jpg']
                }
            }
        },
        {
            label: 'Rise in Vector Species',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/rise-vector-species/',
                    imgs: ['B1---Projected-Change-in-Tick-Population.png',
                        'B2---CO2-and-Mosquitos-in-Northeast-USA.png'
                    ]
                }
            }
        },
        // {
        //     label: 'Forest Pest Video',
        //     action: 'OPEN_PAGE',
        //     payload: {
        //         iframe: 'http://www.pressherald.com/2016/12/07/spread-by-trade-and-climate-bugs-butcher-americas-forests/video/'
        //     }
        // },
        // {
        //     label: 'Invasive Species',
        //     action: 'OPEN_PAGE',
        // }
    ]
};
