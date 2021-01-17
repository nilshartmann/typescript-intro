export default undefined;

// This function takes a string...

type Message = { key: string; params: string[] };

type MessageWithLocale = Message & {
  locale: "en" | "de";
};

function greet(greeting: string | Message | MessageWithLocale) {
  if (typeof greeting === "string") {
    console.log(greeting); // greeting is string
  } else {
    if ("locale" in greeting) {
      console.log(greeting.key, greeting.locale, greeting.params); // greeting is MessageWithLocale
    } else {
      console.log(greeting.key, greeting.params); // greeting is Message
    }
  }
}

// how can it also take an object for specifing i18n params like a key and params?
//   { key: string, params: string[] }

// how can we enhance the object with a default locale?
// how can we ensure that the locale is a valid identifier ("de", "en", ...)
// how can we create a factory function for the english locale?

greet("Hello!");
greet({
  key: "hello",
  params: ["World"],
  locale: "de"
});

function createEnglishLocale() {
  return "en" as const;
}

greet({
  key: "hello",
  params: ["World"],
  locale: createEnglishLocale()
});

// how can it also take an object for specifing i18n params like a key and params?
//   { key: string, params: string[] }

// how can we enhance the object with a default locale?
