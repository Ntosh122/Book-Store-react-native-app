import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const LineDivider = () => {
  return (
    <View
      style={{
        width: 1,
        paddingVertical: 18,
      }}
    >
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray,
          borderLeftWidth: 1,
        }}
      ></View>
    </View>
  );
};
const Home = ({ navigation }) => {
  // Getting Current time
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Based on the time of the day,  a greeting message is returned
  useEffect(() => {
    const currentHour = currentTime.getHours();

    if (currentHour >= 1 && currentHour < 12) {
      setGreeting("Good Morning ☀️");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon ☀️");
    } else {
      setGreeting("Good Evening 🌙");
    }
  }, [currentTime]);

  // ----------------------------------------- //
  const profileData = {
    name: "Ntokozo",
    points: 200,
  };
  const bookPower = {
    id: 1,
    bookName: "48 Laws Of Power",
    bookCover: images.power,
    rating: 4.14,
    language: "Eng",
    pageNo: 452,
    author: "Roberte Green",
    genre: ["Self Development", "Psychology"],
    readed: "15k",
    description:
      "Amoral, cunning, ruthless, and instructive, this multi-million-copy New York Times bestseller is the definitive manual for anyone interested in gaining, observing, or defending against ultimate control – from the author of The Laws of Human Nature.",
    publisher: "Penguin Books",
    languages: "English",
    year: "September 1, 2000",
    ISBN: "987-0140280197",
    ItemWeight: "1.64 pounds",
    dimensions: "9.1 x 6.4 x 1.3 inches",
    backgroundColor: "rgba(226, 75, 33, 0.8)",
    navTintColor: "#fff",
  };
  const bookOtherWordsForHome = {
    id: 2,
    bookName: "Other Words For Home",
    bookCover: images.otherWordsForHome,
    rating: 4.5,
    language: "Eng",
    pageNo: 341,
    author: "Jasmine Warga",
    genre: ["Romance", "Adventure", "Drama"],
    readed: "12k",
    description:
      "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    publisher: "Blazer, Bray",
    languages: "English",
    year: "May 28, 2019",
    ISBN: "978-0062747808",
    ItemWeight: "14.9 ounces",
    dimensions: "5.5 x 1.13 x 8.25 inches",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000",
  };

  const bookTheMetropolis = {
    id: 3,
    bookName: "The Metropolist",
    bookCover: images.theMetropolist,
    rating: 4.1,
    language: "Eng",
    pageNo: 272,
    author: "Seith Fried",
    genre: ["Adventure", "Drama"],
    readed: "13k",
    description:
      "In Metropolist, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    publisher: "Penguine Books",
    languages: "English",
    year: "March 1, 2019",
    ISBN: "978-1643852607",
    ItemWeight: "1 pound",
    dimensions: "5.5 x 1.13 x 8.25 inches",
    backgroundColor: "rgba(247,239,219,0.9)",
    navTintColor: "#000",
  };
  const bookReclaimYourCreativity = {
    id: 4,
    bookName:
      "Reclaim Your Creativity: A Practical Guide To Unlock The Artist Within, Bust Blocks, Monetize Your Talent, And Achieving Your Creative Potential (Reclaim Your Life)",
    bookCover: images.reclaim,
    rating: 5,
    language: "Eng",
    pageNo: 134,
    author: " Atul Yadav",
    genre: ["Psychology", "Creativity"],
    readed: "9k",
    description:
      "From embracing failure as a stepping stone to success, to seeking novelty and originality, you'll learn to break free from the constraints of convention and embrace your unique perspective. Atul supports the notion of prioritizing quantity over quality, emphasizing the importance of finding your own creative voice and cultivating authenticity.",
    publisher: "Nivant Publishing",
    languages: "English",
    year: "July 13, 2023",
    ISBN: "979-8852264329",
    ItemWeight: "7.2 ounces",
    dimensions: "5 x 0.31 x 8 inches",
    backgroundColor: "rgba(247,239,219,0.9)",
    navTintColor: "#000",
  };
  const bookTheTinyDragon = {
    id: 5,
    bookName: "The Tiny Dragon",
    bookCover: images.theTinyDragon,
    rating: 3.5,
    language: "Eng",
    pageNo: 110,
    author: "Ana C Bouvier",
    genre: ["Drama", "Adventure", "Romance"],
    readed: "13k",
    description:
      "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
    publisher: "Independently Published",
    languages: "English",
    year: "January 6, 2020",
    ISBN: "978-1654289706",
    ItemWeight: "7.8 ounces",
    dimensions: "6 x 0.25 x 9 inches ",
    backgroundColor: "rgba(119,77,143,0.9)",
    navTintColor: "#FFF",
  };
  const bookSubtitleArtOfNotGiving = {
    id: 6,
    bookName:
      "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
    bookCover: images.subtitle_art,
    rating: 3.9,
    language: "Eng",
    pageNo: 224,
    author: "Mark Mansion",
    genre: ["Self Development"],
    readed: "13k",
    description:
      "The Subtle Art of Not Giving a F*ck' by Mark Manson is a self-help book that advocates for accepting and embracing negative experiences, focusing on what truly matters, and taking responsibility for our lives.",
      publisher: "Harper",
      languages: "English",
      year: "September 13, 2026",
      ISBN: "978-1797216836",
      ItemWeight: "7.3 ounces",
      dimensions: "5.5 x 0.56 x 8.25 inches",
    backgroundColor: "rgba(253,80,1,0.9)",
    navTintColor: "#FFF",
  };
  const bookFocus = {
    id: 7,
    bookName:
      "Focus on What Matters: A Collection of Stoic Letters on Living Well ",
    bookCover: images.focus,
    rating: 4.4,
    language: "Eng",
    pageNo: 226,
    author: " Darius Foroux",
    genre: ["Productivity"],
    readed: "10k",
    description:
      "Why is it so hard to live well amidst the chaos and noise? While you might think this is a problem of the modern world, it's a timeless issue.\n 2000 years ago, the ancient Stoics talked about the same exact challenges we're facing today , like:\n\n1. How can we find inner peace?\n2. What does it take to be happy?\n3. Can we become more slient",
    publisher: "North Eagle Publishing",
    languages: "English",
    year: "December 22, 2022",
    ISBN: "978-9083301808",
    ItemWeight: "8 ounces",
    dimensions: "5.06 x 0.52 x 7.81 inches",
    backgroundColor: "rgba(154,220,238,0.9)",
    navTintColor: "#FFF",
  };
  const bookRoadToBetter = {
    id: 8,
    bookName:
      "The Road to Better Habits, Updated and Expanded: A simple framework for transforming your habits",
    bookCover: images.habits,
    rating: 4.14,
    language: "Eng",
    pageNo: 120,
    author: "Darius Foroux",
    genre: ["Self Development"],
    readed: "13k",
    description:
      "Covid-19 has changed our habits whether we like to admit it or not. We've become more distracted than ever, which is impacting every aspect of our lives.In this updated and expanded version of The Road To Better Habits, you’ll learn how to transform your habits in a SIMPLE way. Ultimately, where you are in your life is a result of your habits. The American historian and philosopher, Will Durant, said it “We are what we repeatedly do. Excellence, then, is not an act, but a habit.”Bad habits? Bad life. Good habits? Good life. It's really as simple as that. But the problem is that we lack a framework for kicking our bad habits and adopting good habits. Together, we'll explore how you Pick your ideal habitsDeal with distractionsQuit all your bad habitsForm LASTING habits that change your lifeThe Road To Better Habits shows you a different way of living. One that's not about chasing success, but gives you peace of mind, clarity, and more energy. That's the best thing you can do for yourself.",
      publisher: "Penguine",
      languages: "English",
      year: "August 1, 2023",
      ISBN: "978-0143461838",
      ItemWeight: "180g",
      dimensions: "19 x 10.8 x 1.93 inches",
    backgroundColor: "rgba(34, 176, 148, 0.8)",
    navTintColor: "#FFF",
  };
  const bookSketchComedy = {
    id: 9,
    bookName:
      "The History of Sketch Comedy: A Journey through the Art and Craft of Humor",
    bookCover: images.history,
    rating: 4.14,
    language: "Eng",
    pageNo: 300,
    author: "Keegan-Michael Key & Elle Key",
    genre: ["Comedy"],
    readed: "13k",
    description:
      "Authors Keegan-Michael Key and Elle Key build on the popularity of their 2022 Webby Award–winning podcast and delve deeper into the world of sketch, helped along with new essays created expressly for the book by comedy greats. The History of Sketch Comedy will appeal to all kinds of comedy fans as well as fans of Keegan-Michael Key, whether they know him from his Emmy and Peabody-winning work on Key & Peele; his roles in Fargo, The Prom, Schmigadoon!, The Bubble, and the upcoming Wonka; voiceover work in The Lion King; or as President Barack Obama's anger translator, Luther. With epic personal tangents and hilarious asides, the Keys take you on an illuminating journey through all facets of comedy from the stock characters of commedia del arte in the 16th century, to the rise of vaudeville and burlesque, the golden age of television comedy, the influence of the most well-known comedy schools, and the ascension of comedy films and TV specials—all the way through to a look at the future of sketch on social media platforms.",
    publisher: "Chronicle Books",
    languages: "English",
    year: "October 3, 2023",
    ISBN: "978-1797216836",
    ItemWeight: "2.68 ounces",
    dimensions: "7.65 x 1.14 x 9.6 inches",
    backgroundColor: "rgba(17, 92, 145, 0.83)",
    navTintColor: "#FFF",
  };
  const bookBossyPants = {
    id: 10,
    bookName: "Bossypants",
    bookCover: images.bossypants,
    rating: 4.3,
    language: "Eng",
    pageNo: 275,
    author: "Tina Fey ",
    genre: ["Comedy", "Non-fiction"],
    readed: "11k",
    description:
      "A hilarious and honest memoir tells the story of Tina Fey's journey from a middle-school gym class nightmare to becoming a well-known comedian on TV. From her years on SNL to motherhood and all the ups-and-downs in between, Fey reveals all with her trademark humor. Don't miss out on her never-before-solicited opinions on topics ranging from breastfeeding to the electoral process.",
    publisher: "Reagan Authur / Little, Brown",
    languages: "English",
    year: "January 29, 2013",
    ISBN: "987-0316056892",
    ItemWeight: "4.6 ounces",
    dimensions: "4.25 x 0.75 x 7 inches",
    backgroundColor: "rgba(241, 206, 20, 0.83)",
    navTintColor: "#000",
  };
  const bookWombCity = {
    id: 11,
    bookName: "Womb City",
    bookCover: images.womb,
    rating: 3.27,
    language: "Eng",
    pageNo: 416,
    author: "Tlotlo Tsamaase ",
    genre: ["Horror"],
    readed: "4k",
    description:
      "WOMB CITY imagines a dark and deadly future Botswana, rich with culture and true folklore, which begs the question: how far must one go to destroy the structures of inequality upon which a society was founded? How far must a mother go to save the life of her child?",
    publisher: "Erewhon Books",
    languages: "English",
    year: "January 24, 2023",
    ISBN: "987-1645660569",
    ItemWeight: "1.05 pounds",
    dimensions: "5.77 x 1.35 x 8.53 inches",
    backgroundColor: "rgba(241, 82, 20, 0.83)",
    navTintColor: "#fff",
  };
  //
  const myBooksData = [
    {
      ...bookWombCity,
      completion: "10%",
      lastRead: "1d 3h",
    },
    {
      ...bookPower,
      completion: "70%",
      lastRead: "2d 3h",
    },
    {
      ...bookBossyPants,
      completion: "30%",
      lastRead: "5d 3h",
    },
    {
      ...bookOtherWordsForHome,
      completion: "75%",
      lastRead: "3d 5h",
    },
    {
      ...bookSketchComedy,
      completion: "45%",
      lastRead: "1d 4d",
    },
    {
      ...bookTheMetropolis,
      completion: "23%",
      lastRead: "10d 5h",
    },
    {
      ...bookReclaimYourCreativity,
      completion: "12%",
      lastRead: "7hrs 45min",
    },
    {
      ...bookFocus,
      completion: "50%",
      lastRead: "3d 7h",
    },
    {
      ...bookTheTinyDragon,
      completion: "10%",
      lastRead: "1d 2h",
    },
    {
      ...bookSubtitleArtOfNotGiving,
      completion: "20%",
      lastRead: "1d 2h",
    },
    {
      ...bookRoadToBetter,
      completion: "60%",
      lastRead: "2d 3h",
    },
  ];

  const categoriesData = [
    {
      id: 1,
      categoryName: "Best Seller",
      books: [
        bookFocus,
        bookPower,
        bookSubtitleArtOfNotGiving,
        bookRoadToBetter,
      ],
    },
    {
      id: 2,
      categoryName: "The Latest",
      books: [
        bookSketchComedy,
        bookReclaimYourCreativity,
        bookTheMetropolis,
        bookOtherWordsForHome,
        bookBossyPants,
      ],
    },
    {
      id: 3,
      categoryName: "Coming Soon",
      books: [bookWombCity, bookTheTinyDragon],
    },
  ];

  const [profile, setProfile] = React.useState(profileData);
  const [myBooks, setMyBooks] = React.useState(myBooksData);
  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  // RENDERING FUNCTIONS
  function renderHeaderProfile(profile) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        {/* Greetings */}
        <View style={{ flex: 1 }}>
          <View style={{ marginRight: SIZES.padding }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{greeting}</Text>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              {profile.name}
            </Text>
          </View>
        </View>
        {/* POINTS */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20,
          }}
          onPress={() => console.log("Points")}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: "rgba(0,0,0,.5)",
              }}
            >
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.body3,
              }}
            >
              {profile.points} points
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  function renderMyBookSection(myBooks) {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
          onPress={() =>
            navigation.navigate("BookDetail", {
              book: item,
            })
          }
        >
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{
              width: 180,
              height: 250,
              borderRadius: 20,
            }}
          />
          {/* Book Info */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.radius,
              alignItems: "center",
            }}
          >
            <Image
              source={icons.clock_icon}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightBlue,
              }}
            />
            <Text
              style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}
            >
              {item.lastRead}
            </Text>
            <Image
              source={icons.page_icon}
              style={{
                marginLeft: SIZES.radius,
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}
            >
              {item.completion}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{ flex: 1 }}>
        {/* HEADER */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>My Books</Text>
          <TouchableOpacity onPress={() => console.log("See More")}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.lightGray,
                alignSelf: "flex-start",
                textDecorationLine: "underline",
              }}
            >
              See More
            </Text>
          </TouchableOpacity>
        </View>

        {/* BOOKS */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <FlatList
            data={myBooks}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
  function renderButtonSection() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: SIZES.padding,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 70,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
          }}
        >
          {/* claim */}
          <TouchableOpacity
            style={{
              flex: 1,
            }}
            onPress={() => console.log("Claim")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.claim_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}
              >
                Claim
              </Text>
            </View>
          </TouchableOpacity>
          {/* divider */}
          <LineDivider />
          {/* Get Point */}
          <TouchableOpacity
            style={{
              flex: 1,
            }}
            onPress={() => console.log("Get Points")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}
              >
                Get Points
              </Text>
            </View>
          </TouchableOpacity>

          <LineDivider />
          {/* My Card */}
          <TouchableOpacity
            style={{
              flex: 1,
            }}
            onPress={() => console.log("My Card")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}
              >
                My Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function renderCategoryHeader() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginRight: SIZES.padding,
          }}
          onPress={() => setSelectedCategory(item.id)}
        >
          {selectedCategory == item.id && (
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              {item.categoryName}
            </Text>
          )}
          {selectedCategory != item.id && (
            <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
    };
    return (
      <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
        />
      </View>
    );
  }
  function renderCategoryData() {
    var books = [];

    let selectedCategoryBooks = categories.filter(
      (a) => a.id == selectedCategory
    );

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }
    const renderItem = ({ item }) => {
      return (
        <View style={{ marginVertical: SIZES.base }}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() => console.log("Category Data")}
          >
            {/* BOOK COVER */}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{ width: 100, height: 150, borderRadius: 10 }}
            />
            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
              <View>
                <Text
                  style={{
                    paddingRight: SIZES.padding,
                    ...FONTS.h2,
                    color: COLORS.white,
                  }}
                >
                  {item.bookName}
                </Text>
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>
                  {item.author}
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}
                >
                  {item.pageNo}
                </Text>

                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}
                >
                  {item.readed}
                </Text>
              </View>
              {/* GENRE */}
              <View style={{ flexDirection: "row", marginTop: SIZES.base }}>
                {item.genre.includes("Adventure") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
                      Adventure
                    </Text>
                  </View>
                )}
                {item.genre.includes("Romance") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ color: COLORS.lightRed, ...FONTS.body3 }}>
                      Romance
                    </Text>
                  </View>
                )}
                {item.genre.includes("Drama") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkBlue,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ color: COLORS.lightBlue, ...FONTS.body3 }}>
                      Drama
                    </Text>
                  </View>
                )}
                {item.genre.includes("Self Development") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
                      Self Development
                    </Text>
                  </View>
                )}
                {item.genre.includes("Psychology") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ color: COLORS.lightRed, ...FONTS.body3 }}>
                      Psychology
                    </Text>
                  </View>
                )}
                {item.genre.includes("Creativity") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.primary,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                      Creativity
                    </Text>
                  </View>
                )}
                {item.genre.includes("Productivity") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.secondary,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                      Productivity
                    </Text>
                  </View>
                )}
                {item.genre.includes("Comedy") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.lightYellow,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                      Comedy
                    </Text>
                  </View>
                )}
                {item.genre.includes("Non-fiction") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                      Non-fiction
                    </Text>
                  </View>
                )}
                {item.genre.includes("Horror") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                      Non-fiction
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
          {/* BOOKMARK */}
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 5,
              right: 15,
            }}
            onPress={() => console.log("Bookmark")}
          >
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={{
                width: 25,
                heigh: 25,
                tintColor: COLORS.lightGray,
              }}
            />
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View style={{ flex: 1, marginTop: SIZES.padding }}>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.black, flex: 1 }}>
      <StatusBar backgroundColor={COLORS.black} barStyle="dark-content" />
      {/* HEADER SECTION */}
      <View style={{ height: 200 }}>
        {renderHeaderProfile(profile)}
        {renderButtonSection()}
      </View>
      {/* BODY SECTION */}
      <ScrollView style={{ marginTop: SIZES.radius }}>
        {/* Book SECTION */}
        <View>{renderMyBookSection(myBooks)}</View>
        {/* Categories */}
        <View style={{ marginTop: SIZES.padding }}>
          <View>{renderCategoryHeader()}</View>
          <View>{renderCategoryData()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
