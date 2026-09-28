export type Tool = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  popular?: boolean;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  relatedTools: string[];
};

export const tools: Tool[] = [
  {
    slug: "image-compressor",
    name: "Image Compressor",
    description: "Compress JPG, PNG, and WebP images online while reducing file size. Adjust quality and format to get the perfect balance.",
    icon: "🖼️",
    category: "Image",
    popular: true,
    seoTitle: "Image Compressor - Reduce Image File Size Online Free",
    metaDescription: "Free online image compressor. Reduce JPG, PNG, and WebP file sizes while maintaining quality. No signup required.",
    keywords: ["image compressor", "compress image", "reduce image size", "jpg compressor", "png compressor"],
    relatedTools: ["png-to-jpg", "webp-to-jpg", "jpg-to-png"],
  },
  {
    slug: "word-counter",
    name: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs in your text. Get reading time estimates and detailed statistics instantly.",
    icon: "📝",
    category: "Text",
    popular: true,
    seoTitle: "Word Counter - Count Words, Characters & Sentences Free",
    metaDescription: "Free online word counter. Count words, characters, sentences, paragraphs, and get reading time. No signup required.",
    keywords: ["word counter", "character counter", "count words", "text counter", "sentence counter"],
    relatedTools: ["case-converter"],
  },
  {
    slug: "png-to-jpg",
    name: "PNG to JPG",
    description: "Convert PNG images to JPG format instantly. Choose background color for transparency and adjust quality for optimal file size.",
    icon: "🔄",
    category: "Image",
    seoTitle: "PNG to JPG Converter - Convert PNG to JPEG Online Free",
    metaDescription: "Free online PNG to JPG converter. Convert PNG images to JPEG format with customizable background color and quality.",
    keywords: ["png to jpg", "convert png to jpg", "png converter", "png to jpeg", "image converter"],
    relatedTools: ["jpg-to-png", "webp-to-jpg", "image-compressor"],
  },
  {
    slug: "webp-to-jpg",
    name: "WebP to JPG",
    description: "Convert WebP images to JPG format online. Adjust quality settings to balance between file size and image quality.",
    icon: "🔄",
    category: "Image",
    seoTitle: "WebP to JPG Converter - Convert WebP to JPEG Online Free",
    metaDescription: "Free online WebP to JPG converter. Convert WebP images to JPEG format with adjustable quality. No signup required.",
    keywords: ["webp to jpg", "convert webp to jpg", "webp converter", "webp to jpeg", "image converter"],
    relatedTools: ["png-to-jpg", "jpg-to-png", "image-compressor"],
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    description: "Convert text between different cases: UPPERCASE, lowercase, Title Case, camelCase, snake_case, and more.",
    icon: "🔤",
    category: "Text",
    popular: true,
    seoTitle: "Case Converter - Convert Text to UPPERCASE, lowercase & More",
    metaDescription: "Free online case converter. Convert text to uppercase, lowercase, title case, camelCase, snake_case, and more.",
    keywords: ["case converter", "text converter", "uppercase converter", "lowercase converter", "camel case"],
    relatedTools: ["word-counter"],
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    description: "Format, beautify, minify, and validate JSON data. Sort keys alphabetically, choose indentation, and upload JSON files.",
    icon: "📋",
    category: "Developer",
    popular: true,
    seoTitle: "JSON Formatter & Validator - Beautify, Minify JSON Online Free",
    metaDescription: "Free online JSON formatter. Beautify, minify, and validate JSON data with customizable indentation and key sorting.",
    keywords: ["json formatter", "json beautifier", "json validator", "json minifier", "format json"],
    relatedTools: ["password-generator", "base64-encoder-decoder"],
  },
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    description: "Generate QR codes for URLs, text, email, phone, WiFi, and vCards. Customize colors, size, and error correction level.",
    icon: "📱",
    category: "QR",
    popular: true,
    seoTitle: "QR Code Generator - Create QR Codes for URLs, WiFi & More Free",
    metaDescription: "Free online QR code generator. Create QR codes for URLs, text, email, phone, WiFi, and vCards with custom colors.",
    keywords: ["qr code generator", "create qr code", "qr code maker", "free qr code", "qr generator"],
    relatedTools: [],
  },
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Calculate percentages instantly. Find X% of Y, what % X is of Y, percentage change, and discount calculations.",
    icon: "📊",
    category: "Calculators",
    seoTitle: "Percentage Calculator - Calculate Percentages Online Free",
    metaDescription: "Free online percentage calculator. Calculate percentages, percentage change, discounts, and more. Instant results.",
    keywords: ["percentage calculator", "percent calculator", "calculate percentage", "percentage change", "discount calculator"],
    relatedTools: ["bmi-calculator"],
  },
  {
    slug: "jpg-to-png",
    name: "JPG to PNG",
    description: "Convert JPG images to PNG format online. Adjust quality settings and get transparent background support for your images.",
    icon: "🔄",
    category: "Image",
    seoTitle: "JPG to PNG Converter - Convert JPEG to PNG Online Free",
    metaDescription: "Free online JPG to PNG converter. Convert JPEG images to PNG format with adjustable quality. No signup required.",
    keywords: ["jpg to png", "convert jpg to png", "jpeg to png", "jpg converter", "image converter"],
    relatedTools: ["png-to-jpg", "webp-to-jpg", "image-compressor"],
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    description: "Generate strong, secure passwords instantly. Customize length, character types, and exclude similar characters.",
    icon: "🔐",
    category: "Developer",
    popular: true,
    seoTitle: "Password Generator - Create Strong Secure Passwords Free",
    metaDescription: "Free online password generator. Create strong, secure passwords with customizable length and character types.",
    keywords: ["password generator", "strong password", "secure password", "random password", "password creator"],
    relatedTools: ["json-formatter", "base64-encoder-decoder"],
  },
  {
    slug: "base64-encoder-decoder",
    name: "Base64 Encoder/Decoder",
    description: "Encode text to Base64 or decode Base64 to text instantly. Supports Unicode, URL-safe encoding, and file upload.",
    icon: "🔐",
    category: "Developer",
    seoTitle: "Base64 Encoder/Decoder - Convert Text to Base64 Online Free",
    metaDescription: "Free online Base64 encoder and decoder. Convert text to Base64 and vice versa with URL-safe option.",
    keywords: ["base64 encoder", "base64 decoder", "base64 converter", "encode base64", "decode base64"],
    relatedTools: ["json-formatter", "password-generator"],
  },
  {
    slug: "color-picker",
    name: "Color Picker",
    description: "Pick colors visually and get HEX, RGB, and HSL values instantly. Generate color variations, harmonies, and CSS code.",
    icon: "🎨",
    category: "Design",
    seoTitle: "Color Picker - HEX, RGB, HSL Color Converter Online Free",
    metaDescription: "Free online color picker. Pick colors, get HEX, RGB, HSL values, generate color variations and harmonies.",
    keywords: ["color picker", "hex color", "rgb color", "hsl color", "color converter", "color palette"],
    relatedTools: [],
  },
  {
    slug: "bmi-calculator",
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index (BMI) instantly with metric or imperial units. Get health advice based on WHO standards.",
    icon: "⚖️",
    category: "Calculators",
    popular: true,
    seoTitle: "BMI Calculator - Calculate Body Mass Index Online Free",
    metaDescription: "Free online BMI calculator. Calculate Body Mass Index with metric or imperial units, get health advice.",
    keywords: ["bmi calculator", "body mass index", "weight calculator", "health calculator", "bmi chart"],
    relatedTools: ["percentage-calculator"],
  },
  {
    slug: "markdown-to-html",
    name: "Markdown to HTML",
    description: "Convert Markdown to HTML instantly with live preview. Supports headings, lists, code blocks, tables, and more.",
    icon: "📝",
    category: "Developer",
    popular: true,
    seoTitle: "Markdown to HTML Converter - Live Preview Online Free",
    metaDescription: "Free online Markdown to HTML converter with live preview. Convert Markdown to HTML instantly. 100% private.",
    keywords: ["markdown to html", "markdown converter", "md to html", "markdown preview", "markdown editor"],
    relatedTools: ["json-formatter", "base64-encoder-decoder"],
  },
];

// ✅ الدالتان المفقودتان تمت إضافتهما هنا:

export const getAllTools = () => {
  return tools;
};

export const getCategories = () => {
  const uniqueCategories = Array.from(new Set(tools.map((tool) => tool.category)));
  return uniqueCategories.map((category) => {
    let icon = "🛠️";
    if (category === "Image") icon = "🖼️";
    else if (category === "Text") icon = "📝";
    else if (category === "Developer") icon = "💻";
    else if (category === "QR") icon = "📱";
    else if (category === "Calculators") icon = "📊";
    else if (category === "Design") icon = "🎨";
    
    return {
      id: category.toLowerCase().replace(/\s+/g, "-"),
      name: category,
      icon: icon,
    };
  });
};