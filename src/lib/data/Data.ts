import { Category } from "./Category"
import IconChicken from "$lib/images/chicken.svg"
import IconFish from "$lib/images/fish.svg"
import IconDuck from "$lib/images/duck.svg"
import IconPig from "$lib/images/pig.svg"
import IconCow from "$lib/images/cow.svg"
import IconSheep from "$lib/images/sheep.svg"
import IconRabbit from "$lib/images/rabbit.svg"
import IconTurkey from "$lib/images/turkey.svg"
import IconGoose from "$lib/images/goose.svg"
import IconGoat from "$lib/images/goat.svg"
import IconBuffalo from "$lib/images/buffalo.svg"
import IconCamel from "$lib/images/camel.svg"
import IconPigeon from "$lib/images/pigeon.svg"
import IconHorse from "$lib/images/horse.svg"
import IconDeer from "$lib/images/deer.svg"
import IconDog from "$lib/images/dog.svg"
import IconRodent from "$lib/images/rodent.svg"
import IconShark from "$lib/images/shark.svg"
import IconCricket from "$lib/images/cricket.svg"
import IconMealworms from "$lib/images/mealworm.svg"
import IconFly from "$lib/images/fly.svg"
import IconBee from "$lib/images/bee.svg"
import IconLobster from "$lib/images/lobster.svg"

export const Data = {
  Chicken: {
    name: "Chickens",
    slug: "chickens",
    category: Category.Land,
    icon: IconChicken,
    annually: 70_000_000_000,
    sources: ["https://www.biologicaldiversity.org/takeextinctionoffyourplate/pdfs/ChickenFactsheet.pdf", "https://epar.evans.uw.edu/research/environmental-implications-livestock-chickens", "https://ourworldindata.org/how-many-animals-get-slaughtered-every-day", "https://www.al.org.au/how-many-chickens-die-every-year"],
    description: `
      <p>Chickens are farmed primarily for consumption.</p>
      <p>Chickens meant for consumption are bred to get as large as possible as fast as possible. This often leads to severe health problems such as skeletal deforminities, organ failure, and intense pain. They are typically killed after just 5 to 7 weeks old, after living a short live in overcrowded and stressful conditions.</p>
      <p>Egg laying chickens are often kept in battery cages or crowded barns, with limited space to move. They are bred in a way that forces them to produce a new egg almost daily, where as more naturally developed chickens only lay 10 to 15 eggs per year.</p>
      <p>Chicken farming primarily involves female chickens. The practice of killing male chicks shortly after hatching results in the deaths of billions of chicks annually.</p>

      <h3>Environmental impact</h3>
      <p>Chicken farming is has a significant environmental footprint. Large-scale operations produce substantial amounts of waste, contributing to soil, water, and air pollution. The grain and soy used to feed chickens are often grown using unsustainable farming practices, leading to deforestation, loss of biodiversity, and significant greenhouse gas emissions.</p>

      <h3>Health concerns</h3>
      <p>The consumption of chicken and eggs has been linked to various health issues. The widespread use of antibiotics can contribute to antibiotic-resistant bacteria. Industrial chicken farming practices can lead to outbreaks of diseases such as salmonella and avian influenza. There are also concerns about the nutritional quality of poultry products, with high levels of cholesterol and saturated fats associated with increased risks of heart disease and other health conditions.</p>
    `
  },
  Fish: {
    name: "Fish",
    slug: "fish",
    category: Category.Ocean,
    icon: IconFish,
    annually: 1_500_000_000_000,
    sources: ["https://www.nationalgeographic.com/science/article/global-industrial-fishing-footprint-spd", "https://www.worldwildlife.org/threats/overfishing", "https://www.pewtrusts.org/en/research-and-analysis/issue-briefs/2022/11/more-than-100000-fishing-related-deaths-occur-each-year-study-finds", "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2020.6148"],
    description: `
      <p>Fishing is primarily done in the open ocean, rather than farms. Nets are cast and will catch anything caught within them. Many of the fish caught are not intended to be caught, including dolphins, turtles, and even seabirds, causing unnecessary harm. But even the fish that were intended to be caught suffer in droves. The fish are all squished together in the net the fish and up suffocating. Those that are not killed by suffocation are brought to the surface and end up dying due to a lack of water. In either case the animals end up dying a slow and painful death.</p>

      <h3>Destruction of coral reefs</h3>
      <p>As fishing nets drag across the ocean floor they destroy critical habitats such as coral reefs and seagrass beds. These habitats are essentially for reproduction and survival of many ocean animals. Coral reefs are crucial in sustaining life all across the earth, providing places to live, feed, and procreate. Additionally, they are vital in reducing the effects of climate, acting as carbon sinks. Reefs even protect coastlines from erosion. With their destruction climate change will worsen, killing even more in the process.</p>

      <h3>Ocean trash</h3>
      <p>A large percentage of the ocean's trash is as the direct result of fishing. Fishing boats leave behind their nets, supplies, and more, all resulting in large amount of trash. This trash ends up killing all sorts of marine life through suffocation, digestion of the trash, or from getting stuck.</p>
    `
  },
  Pig: {
    name: "Pigs",
    slug: "pigs",
    category: Category.Land,
    icon: IconPig,
    annually: 1_500_000_000,
    sources: ["https://ourworldindata.org/how-many-animals-get-slaughtered-every-day", "https://www.roysfarm.com/pig-farming/", "https://faunalytics.org/global-animal-slaughter-statistics-charts-2022-update/", "https://www.sinergiaanimalinternational.org/single-post/slaughterhouses"],
    description: `
      <p>Pigs are primarily farmed for food, as well as for their skin. They are also used for cosmetics and medical use. Half of this is done in China, but pigs are farmed world-wide.</p>
      <p>Pigs are kept in small confined and crowded spaces. The stress this causes leads to agressive behaviour amongst the pigs. To combat this pigs tails and teeth are often trimmed to prevent them from harming each other. This is often done without any sort of anethesia, causing immense pain. The confined spaces lead to severe health issues are the animals are not able to excerise their muscles. They often end up laying in the same position for a long time, leading to sores, muscle fatigue, and bone damage. All of which is painful and often left untreated.</p>
      <p>Pigs are artifically impregnated, forcing them to have offspring. While pregant and after giving birth the piglets are kept in a small cage together their mother so they can constantly feed. The small space may lead to piglets getting crushed by their mother, as there isn't enough space for her to move effectively. They may also die due to diseases due to poor conditions, or starvation as the piglets fight for access to the mother's milk.</p>

      <h3>Slaughter</h3>
      <p>When the pigs are ready for slaughter their are transported away from the farm. While in transport, which may be a long journey, many pigs end up killed due to poor conditions from overcrowding. The overcrowding results in significant distress, leading to injuries, and worse. In the slaughterhouse pigs are often stunned before being slaughtered. This is done either through electrical stunning, gas, or through a mechanical blow to the head. After stunning the pigs are hung from their legs and their throats are cut to allow blood to drain out. Stunning is not always effective and many pigs end up being concious while bleeding out, leading to immense pain and distress before their death.</p>

      <h3>Environmental impact</h3>
      <p>The pigs produce large amounts of waste which end up contaminating soil or water soils if not taken care off properly. Additionally pigs produce a lot of methane and ammonia emissions, contributing to greenhouse gases.</p>

      <h3>Health concerns</h3>
      <p>To fight diseases amongst the pigs, high levels of antibiotics are used. The antibiotics end up in the final product, consumption might end up with a build up of antibiotics-resistant bactiara in humans. Additionally diseases can spread rapidly amongst the pigs, some of which many be transfered from pigs to humans.</p>
    `
  },
  Duck: {
    name: "Ducks",
    slug: "ducks",
    category: Category.Land,
    icon: IconDuck,
    annually: 3_000_000_000,
    sources: ["https://ourworldindata.org/grapher/animals-slaughtered-for-meat?facet=metric&uniformYAxis=0", "https://www.barnsanctuary.org/the-barn-blog/learn-about-ducks", "https://www.dpi.nsw.gov.au/__data/assets/pdf_file/0009/442854/introduction-to-commercial-duck-farming.pdf"],
    description: `
      <p>Ducks are farmed primarily for consumption of meat, eggs, and foie gras (fatty liver). China is one of the most significant producers, but ducks are farmed globally at a large scale.</p>

      <h3>Farming conditions</h3>
      <p>Most ducks are killed in farms without any access to water. Ducks spend most of their time swimming and their legs are not capable of standing on their legs for an extended period of time, let alone their entire lives. As a result they can't properly developer their leg and foot muscles, leading to cronic discomfort and pain. These farm environments are overcrowded, causing immense stress, and leading to the ducks plucking their own feathers and attacking other ducks. As a means to lessen the impact their beaks and feet are snipped. This is often done without anesthesia, leading to unnecessary suffering or even death. Ducks are slaughtered after only 7 weeks of age, after being grown at unnatural rates. When ducks are transported to the slaughterhouses this is often done in extremely tight quarters, with many ducks dying from suffocation, heat, cold, or lack of food and water.</p>

      <h3>Foie gras</h3>
      <p>Ducks that are farmed for foie gras are kept in tiny cages where they are force fed over a period of several weeks. Pipes are forced down their throat and food is directly pumped into their stomach in order to fatten them up as quickly as possible. This process is extremely painful and leads to immense stress and depression. Only male ducks are used for foie gras, with female ducks either being culled or raised for meat instead.</p>

      <h3>Hunting</h3>
      <p>Many ducks are killed through hunting. This is done either in the wild, or in some cases ducks are raised to be hunted for sport and leasure. Hunting ducks often leads to unnecessary harm as ducks are often injured and maimed, rather than killed out right. While hunting is often regulated, it still often leads to a decline in duck populations which affects biodiversity. Wild ducks play a curcial role in their ecosystems, including controlling insect and dispersing seeds. Their decline can have a lasting effect on everything around them.</p>
    `
  },
  Cow: {
    name: "Cows",
    slug: "cows",
    category: Category.Land,
    icon: IconCow,
    annually: 300_000_000,
    sources: ["https://thehumaneleague.org/article/why-are-cows-bad-for-the-environment", "https://www.worldwildlife.org/industries/beef", "https://epar.evans.uw.edu/sites/default/files/EVANS_UW_Request_155_Environmental_Impacts_of_Livestock_Cattle.pdf"],
    description: `
      <p>Cows are farmed for various reasons; meat, dairy, leather, gelatin, and fertilizer are the most common use cases.<p>
      <p>Cows require a large amount of space to be happy. They also require proper shelters. This includes adequate protection against weather, shade to protect against hot weather, and proper insulation during colder seasons. In reality they are often kept in crowded, limited, and dirty conditions, leading to stress, injuries, and rapid spreading of diseases.</p>
      <p>Cows are often treated poorly. Cows are artifically impregnated, not only to produce new cows, but also keep them produce a steady amount of milk, which just like all other animals, is primarily produced during and after pregnancy. While cows are pregnant they are kept in tiny cells for extended periods of time while they are milked. This process is often done twice a day and is very uncomfortable for the cows. Cows are kept continously re-impregnanted until they are eventually slaughtered for meat.</p>
      <p>Cows are often branded with hot steel. This is done while the cow is fully concious. The incredibly pain that this causes is traumatic and can lead to a quick decline in mental health.<p>

      <h3>Environmental concerns</h3>
      <p>Cows require adequare space to move and graze. The large amount of lands needed lead to deforestation as trees are cleared to make room for pastures. These pastures are then often left improperly cared for, with overgrazing being a major factor. This leads to erosion of the soil and with that loss of arable land.</p>
      <p>Cows produce a very large of methane, a greenhouse gas. Greenhouse gases lead to global warming, and methane is one of the larger contributors. The immense amount of cows that are kept make up for a very large portion of the world's greenhouse gas production.</p>
      <p>Large amounts of water are needed to sustain the cows. This comes in the form of drinking water, water for the crops and land, and water used during the processing of meat.</p>

      <h3>Health concerns</h3>
      <p>Red meat has been linked to increased risks of heart disease, strokes, and even cancer. Regular consumption of red meat can have a serious impact on your well-being.</p>
      <p>The large amount of antibiotics used to combat diseases amongst the cows end up producing antibiotics resistant bacteria. These antibiotics are present in the final meat product and have the same negative effects on humans.</p>

    `
  },
  Sheep: {
    name: "Sheep",
    slug: "sheep",
    category: Category.Land,
    icon: IconSheep,
    annually: 550_000_000,
    sources: [],
    description: ``
  },
  Rabbit: {
    name: "Rabbits",
    slug: "Rabbits",
    category: Category.Land,
    icon: IconRabbit,
    annually: 1_000_000_000,
    sources: ["https://www.ciwf.org.uk/farm-animals/rabbits/#:~:text=keep%20them%20safe.-,Rabbit%20farming%20today,in%20China%20(FAOSTAT%202017)..", "https://sentientmedia.org/how-many-animals-are-killed-for-food-every-day/", "https://www.fao.org/faostat/en/#data/QCL"],
    description: `
      <p>Rabbits are farmed for various purposes including meat, fur, wool, and to keep as pets.<p>
      <p>Rabbits are kept in confined spaces, keeping them from there natural behaviours of digging, hopping around, and social interaction. This can lead to several stress and health issues.</p>
      <p>They are farmed for their fur, which is often plucked while the animal is still alive and concious. When the fur itself is no longer profitable the animals are slaughtered for their meat. This is done through several methods including breaking necks, electrocution, or blunt force trauma. These methods are inconsistent which, if not performed correctly, can cause unnecessary suffering.<p>

      <h3>Environmental concerns</h3>
      <p>Rabbits use a substantial amount of resources, requiring large amounts of water and land to produce crops. The waste produced from keeping these animals (such as manure and cacasses) is substatial, leading to water and land pollution, affecting ecosystems and potentially contaminating water supplies.</p>

      <h3>Health concerns</h3>
      <p>Rabbits are susceptible to many diseases. The close quarters at which they are kept allow these diseases to spread rapidly, which has been known to spread to wild rabbits as well. Some diseases can spread to humans as well, presenting health risks for workers are nearby communities.</p>
      <p>To manage diseases, antibiotics are used. Overuse can contribute to the development of antibiotic-resistant bacteria within the rabbits. The presence of antibiotics can pose risks to consumers as well.</p>
    `,
  },
  Turkey: {
    name: "Turkeys",
    slug: "turkeys",
    category: Category.Land,
    icon: IconTurkey,
    annually: 650_000_000,
    sources: [],
    description: ``
  },
  Goose: {
    name: "Geese",
    slug: "geese",
    category: Category.Land,
    icon: IconGoose,
    annually: 700_000_000,
    sources: [],
    description: ``
  },
  Goat: {
    name: "Goats",
    slug: "goats",
    category: Category.Land,
    icon: IconGoat,
    annually: 450_000_000,
    sources: [],
    description: ``
  },
  Buffalo: {
    name: "Buffalo",
    slug: "buffalo",
    category: Category.Land,
    icon: IconBuffalo,
    annually: 24_000_000,
    sources: [],
    description: ``
  },
  Camel: {
    name: "Camels",
    slug: "camels",
    category: Category.Land,
    icon: IconCamel,
    annually: 3_000_000,
    sources: [],
    description: ``
  },
  Pigeon: {
    name: "Pigeons (and other birds)",
    slug: "pigeons",
    category: Category.Land,
    icon: IconPigeon,
    annually: 45_000_000,
    sources: [],
    description: ``
  },
  Horse: {
    name: "Horses",
    slug: "horses",
    category: Category.Land,
    icon: IconHorse,
    annually: 4_500_000,
    sources: [],
    description: ``
  },
  Deer: {
    name: "Deer",
    slug: "deer",
    category: Category.Land,
    icon: IconDeer,
    annually: 10_000_000,
    sources: [],
    description: ``
  },
  Dog: {
    name: "Dogs",
    slug: "dogs",
    category: Category.Land,
    icon: IconDog,
    annually: 25_000_000,
    sources: [],
    description: ``
  },
  Rodent: {
    name: "Rodents",
    slug: "rodents",
    category: Category.Land,
    icon: IconRodent,
    annually: 70_000_000,
    sources: [],
    description: ``
  },
  Shark: {
    name: "Sharks",
    slug: "sharks",
    category: Category.Ocean,
    icon: IconShark,
    annually: 80_000_000,
    sources: ["https://www.science.org/doi/10.1126/science.adf8984", "https://www.greenpeace.org/international/story/46967/100-million-dead-sharks-its-not-all-about-shark-fin-soup/", "https://www.eoceans.org/sharks-and-rays/100-million-sharks-killed-each-year", "https://www.smithsonianmag.com/smart-news/sharks-are-being-killed-at-rising-rates-despite-increased-regulations-180983593/"],
    description: `
      <p>Sharks are fished primarily for their meat, fins, cartilage, and liver oil. They are also often caught as bycatch while fishing for other fish.</p>

      <h3>Climate change</h3>
      <p>Sharks are very important in the overall health of marine ecosystems. Their decline will lead to an imbalance in food sources. Shark populations contribute greatly to the health of coral reefs by regulation the numbers of other species of fish that feed on reef-building organisms. As such killing sharks will directly result in the decline of coral reefs, which are vital in reducing carbon from the air, amongst other benefits, resulting in rising sea temperatures.</p>

      <h3>Finning</h3>
      <p>Finning involves catching sharks, removing their fins, and often discarding the still alive sharks back into the ocean. Sharks without fins cannot swim properly and they end up slowly dying through suffocation, blood loss, hunger, or by being preyed on by other fish. Fins are considred delicacies in some cultures and can fetch high prices, driving the demand for this common practice.</p>

      <h3>Public perception</h3>
      <p>Shark are often viewed negatively, as some sort of evil that lies within the oceans, making it difficult to gain attention for conservation efforts. Sharks kill less than 10 people a year world-wide, while people kill over 80 million sharks. In truth shark are vital to the health of their ecosystems and without them coral reefs will suffer, and we will too as a result.</p>
    `
  },
  BlackSoldierFly: {
    name: "Black Soldier Flies",
    slug: "black-soldier-flies",
    category: Category.Insect,
    icon: IconFly,
    annually: 200_000_000_000,
    sources: ["https://rethinkpriorities.org/publications/welfare-considerations-for-farmed-black-soldier-flies-hermetia-illucens", "https://rethinkpriorities.org/publications/insects-raised-for-food-and-feed"],
    description: `
      <p>Black Soldier Flies are primarily used as a protein source for animal feed. Often for chickens and pigs, as well as fish farming.</p>
      <p>Black Soldier Flies generate a large amount of waste that have been known to contaminate the environment if not handled properly. Additionally if not managed properly, these flies can become an invasive species, disrupting local ecosystems. They have been known to transmit certain diseases, especially because they are often fed waste.</p>
      <p>As with other insects, it's difficult to evaluate the mental well-being of flies. There is little research being done to indicate if they are unhappy in large farms, where they are kept in large numbers. You might assume they have no proper capacity to feel, either emotionally or physically. But even flies have shown to react with distress in situations they don't like. It's hard to say if that's purely a reaction, or if they are actually experiencing anything, but it can not be discredited.</p>
    `
  },
  Cricket: {
    name: "Crickets",
    slug: "crickets",
    category: Category.Insect,
    icon: IconCricket,
    annually: 400_000_000_000,
    sources: ["https://rethinkpriorities.org/publications/insects-raised-for-food-and-feed", "https://www.businessinsider.com/how-50-million-crickets-harvested-a-week-become-food-2021-4?international=true&r=US&IR=T"],
    description: `
      <p>Crickets are primarily for consumption, serving as an alternative protein and vitamine source, as well as serving as pet food and animal feed. They are also used as fertilizer, which comes from their waste.</p>
      <p>As with other insects, it's difficult to evaluate the mental well-being of crickets. There is little research being done to indicate if they are unhappy in large farms, where they are kept in tight quarters in large numbers. It's easy to assume they don't have a capacity to feel, and they might not even be able to experience pain. But at the same time they have shown that they react to certain situations. They show distress just like other animals.</p>
      <p>Insects farming has less of an impact compared to other animals, simply because of their much smaller size. Despite this they still have a considerable environmental footprint, part coming from the farming operations used to manage cricket waste.</p>
    `
  },
  Mealworm: {
    name: "Mealworms",
    slug: "mealworms",
    category: Category.Insect,
    icon: IconMealworms,
    annually: 300_000_000_000,
    sources: ["https://rethinkpriorities.org/publications/insects-raised-for-food-and-feed", "https://bootstrapbee.com/smallholding/is-mealworm-farming-profitable", "https://www.sciencegate.app/document/10.3920/jiff2021.0029"],
    description: `
      <p>Mealworms are primarily for consumption, serving as an alternative protein source. Additionally they serve as pet food and animal feed.</p>
      <p>Insects experience emotions or conciousness in different ways than humans and other animals. Despite that they have shown distress when conditions are not to their liking. This can lead to cannibalism, disease, heat deaths, malnutrition, and behavioral restrictions related to their natural cycles. It's hard to say if this distress is because of mental stress or because of subconcious actions, but distress is distress.</p>
      <p>The farming of mealworms has less of an impact compared to other animals, simply because of their size. Despite this they still produce a considerable amount of greenhouse gases and ammonia, as well as using a large amount of water.</p>
    `
  },
  Bee: {
    name: "Bees",
    slug: "bees",
    category: Category.Insect,
    icon: IconBee,
    annually: 1_300_000_000_000,
    sources: ["https://www.destatis.de/EN/Themes/Countries-Regions/International-Statistics/Data-Topic/AgricultureForestryFisheries/Bees.html", "https://www.statista.com/topics/5090/honey-market-worldwide/", "https://www.scientificamerican.com/article/the-problem-with-honey-bees/"],
    description: `
      <p>This number is derived from a low estimate of 101.6 million beehives world wide, each housing an average of 45 thousand bees. Bees are active for a period of roughly 6 months and have a life span of 4 to 6 weeks (45,000*101.6*106*6*452 ≈ 1.3*10^12).</p>
      <p>While bee farming can have positive effects for pollination, large farms bring a lot of trouble. There are over 20 thousand species of bees, only two (the Western honey bee, and the Eastern honey bee) are commonly used for farming honey. Bringing in large amount of bees drives out native species of bees, causing an unbalance in the natural ecosystems. Many of these native species are at risk of extinction. When you buy honey it's good to remember that no matter how well managed and natural the bee farm might be, it has likely caused more harm than good.</p>
      <p>The use of pesticides has meant an even larger decline of wild bees. The pesticides used on farms harm both farmer bees and wild bees. Additionally, intense farming practices lead of degragation of nature, reducing the amount of wild flowers, and reducing the amount of nesting sites for wild bee species.</p>
      <p>Bees are incredibly important as natural pollinators, as such it's important to save the bees. But that means saving all the bees, not just the honey bees.</p>
    `
  },
  Lobster: {
    name: "Lobsters",
    slug: "lobsters",
    category: Category.Ocean,
    icon: IconLobster,
    annually: 270_000_000,
    sources: ["https://www.reportlinker.com/clp/global/4436", "https://www.britannica.com/animal/lobster", "https://animalsaustralia.org/our-work/compassionate-living/6-incredible-lobster-facts/", "https://animalsaustralia.org/our-work/marine-animals/crustaceans-lobsters-octopus-sentient-feel-pain-laws-uk/", "https://www.columbia.edu/~col8/lobsterarticle.pdf"],
    description: `
      <h3>How this was calculated</h3>
      <p>The actual number of Lobsters killed is difficult to get exact. The number is measured in weight rather than number of lobsters. Additionally not all regions publish their numbers. The United States reported 93 million pounds of American Lobster in 2019, Canada reported 100 million in the same year, Australia and New Zealand reported 22 million combined. From here we can extrapolate values for other regions based on estimated consumption. Lobsters vary in weight, ranging between 1 and 5.5 pounds. If we combine global numbers and divide by the weight, we get to roughly 270 million. This is an estimation and actual numbers might vary.</p>

      <h3>Distrupting ecosystems</h3>
      <p>As with other fish, Lobsters are often caught in the open ocean. Fishing often results in bycatch, where animals other than lobsters are caught unintentionally. This can cause significant harm to local ecosystems as it decreases the population of all fish. Additionally, high demand leads to overfishing, which drastically reduces populations. This doesn't harm just the lobsters, as species are often very interconnected. Many other animals will die as a result of lobsters being wiped out.</p>

      <h3>Lobsters feel pain</h3>
      <p>It has been proven that lobsters, amongst many other ocean animals (cephalopods and decapods), can feel pain. They are sensitive creatures. They can learn to anticipate and avoid pain, just like many other animals. Unlike other animals, lobsters can't go into shock. When humans are in so much pain they can't handle it, we go into shock, essentially blocking out the pain when it's too great. Lobsters suffer much longer when in pain. This is especially cruel when you realise that traditionally they are boiled alive. They suffer greatly in their final moments.</p>
      <p>Unfortunately death isn't the only moment they suffer. Lobsters feel great emotional stress as they are taken out of their safe space. When placed in new environments, especially crowded ones, they get very anxious, which might even lead to depression.</p>
    `
  },
}
