import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS, SIZES, icons, FONTS } from "../constants";

const LineDivider = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 5,
      }}
    >
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray2,
          borderLeftWidth: 1,
        }}
      ></View>
    </View>
  );
};
const BookDetail = ({ route, navigation }) => {
  const [book, setBook] = React.useState(null);
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] =
    React.useState(0);

  React.useEffect(() => {
    let { book } = route.params;
    setBook(book);
  }, [book]);

  function renderBookInfoSection() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={book.bookCover}
          resizeMode="cover"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />
        {/* COLOR OVERLAY */}
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: book.backgroundColor,
          }}
        ></View>
        {/* NAVIGATION HEADER */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            height: 80,
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              marginLeft: SIZES.base,
            }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.back_arrow_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: book.navTintColor,
              }}
            />
          </TouchableOpacity>

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ ...FONTS.h3, color: book.navTintColor }}>
              Book Detail
            </Text>
          </View>

          <TouchableOpacity
            style={{
              marginRight: SIZES.base,
            }}
            onPress={() => console.log("More")}
          >
            <Image
              source={icons.more_icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: book.navTintColor,
                alignSelf: "flex-end",
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 5, paddingTop: SIZES.padding2, alignItems: "center" }}
        >
          <Image
            source={book.bookCover}
            resizeMode="contain"
            style={{
              flex: 1,
              width: 150,
              height: "auto",
            }}
          />
        </View>

        {/* BOOK COVER */}
        <View
          style={{ flex: 1.8, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ ...FONTS.h2, color: book.navTintColor }}>
            {book.bookName}
          </Text>
          <Text style={{ ...FONTS.body3, color: book.navTintColor }}>
            {book.author}
          </Text>
        </View>
        {/* Book Info */}
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 20,
            margin: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        >
          {/* Rating */}
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              {book.rating}
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Rating</Text>
          </View>

          <LineDivider />
          {/* Pages */}
          <View
            style={{
              flex: 1,
              alignItems: "center",
              paddingHorizontal: SIZES.radius,
            }}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              {book.pageNo}
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Pages</Text>
          </View>

          <LineDivider />
          {/* Language */}

          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              {book.language}
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>
              Language
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderBookDescription() {
    return (
      <View style={{ flex: 1, flexDirection: "row", padding: SIZES.padding }}>
        {/* CUSTOM SCROLLBAR */}
        <View
          style={{
            width: 4,
            height: "100%",
            backgroundColor: COLORS.gray1,
          }}
        ></View>
        {/* DESCRIPTION */}
        <ScrollView
          contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              marginBottom: SIZES.padding,
            }}
          >
            Book Description
          </Text>
          <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>
            {book.description}
          </Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ marginTop: SIZES.padding }}>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.white,
                  marginBottom: SIZES.padding,
                }}
              >
                Product Information
              </Text>
              <Text style={{ ...FONTS.body2, color: COLORS.white }}>
                Publisher:
                <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>
                  {" "}
                  {book.publisher}
                </Text>
              </Text>

              <Text style={{ ...FONTS.body2, color: COLORS.white }}>
                Language:
                <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>
                  {" "}
                  {book.languages}
                </Text>
              </Text>
              <Text style={{ ...FONTS.body2, color: COLORS.white }}>
                Year Published:
                <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>
                  {" "}
                  {book.year}
                </Text>
              </Text>

              <Text style={{ ...FONTS.body2, color: COLORS.white }}>
                ISBN:
                <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>
                  {" "}
                  {book.ISBN}
                </Text>
              </Text>

              <Text style={{ ...FONTS.body2, color: COLORS.white }}>
                Item Weight:
                <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>
                  {" "}
                  {book.ItemWeight}
                </Text>
              </Text>

              <Text style={{ ...FONTS.body2, color: COLORS.white }}>
                Dimensions:
                <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>
                  {" "}
                  {book.dimensions}
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }  function renderBookButton() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            width: 60,
            backgroundColor: COLORS.secondary,
            marginLeft: SIZES.padding,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.bookmark_icon}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.lightGray2,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            Start Reading
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (book) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.black }}>
        <StatusBar backgroundColor={COLORS.black} barStyle="dark-content" />
        <View style={{ flex: 4 }}>{renderBookInfoSection()}</View>
        {/* Description */}
        <View style={{ flex: 2 }}>{renderBookDescription()}</View>

        {/* Buttons */}
        <View style={{ height: 70, marginBottom: 30 }}>
          {renderBookButton()}
        </View>
      </View>
    );
  } else {
    return <></>;
  }
};

export default BookDetail;
