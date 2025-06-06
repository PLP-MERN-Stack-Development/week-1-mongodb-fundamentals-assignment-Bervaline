use plp_bookstore
switched to db plp_bookstore
db.createCollection("books")
{ ok: 1 }
db.books.insertMany([
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 30,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 25,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 20,
    in_stock: false,
    pages: 320,
    publisher: "Avery"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 22,
    in_stock: true,
    pages: 443,
    publisher: "Harper"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    published_year: 1949,
    price: 15,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 18,
    in_stock: false,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    published_year: 2011,
    price: 28,
    in_stock: true,
    pages: 499,
    publisher: "Farrar, Straus and Giroux"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 14,
    in_stock: true,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 16,
    in_stock: false,
    pages: 208,
    publisher: "HarperTorch"
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    genre: "Business",
    published_year: 2014,
    price: 19,
    in_stock: true,
    pages: 224,
    publisher: "Crown Business"
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6842dd3ed06a41e0b5ad0d1d'),
    '1': ObjectId('6842dd3ed06a41e0b5ad0d1e'),
    '2': ObjectId('6842dd3ed06a41e0b5ad0d1f'),
    '3': ObjectId('6842dd3ed06a41e0b5ad0d20'),
    '4': ObjectId('6842dd3ed06a41e0b5ad0d21'),
    '5': ObjectId('6842dd3ed06a41e0b5ad0d22'),
    '6': ObjectId('6842dd3ed06a41e0b5ad0d23'),
    '7': ObjectId('6842dd3ed06a41e0b5ad0d24'),
    '8': ObjectId('6842dd3ed06a41e0b5ad0d25'),
    '9': ObjectId('6842dd3ed06a41e0b5ad0d26')
  }
}
db.books.find({ genre: "Fiction" })
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d21'),
  title: '1984',
  author: 'George Orwell',
  genre: 'Fiction',
  published_year: 1949,
  price: 15,
  in_stock: true,
  pages: 328,
  publisher: 'Secker & Warburg'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d24'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 14,
  in_stock: true,
  pages: 281,
  publisher: 'J.B. Lippincott & Co.'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d25'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 16,
  in_stock: false,
  pages: 208,
  publisher: 'HarperTorch'
}
db.books.find({ published_year: { $gt: 2010 } })
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d1f'),
  title: 'Atomic Habits',
  author: 'James Clear',
  genre: 'Self-help',
  published_year: 2018,
  price: 20,
  in_stock: false,
  pages: 320,
  publisher: 'Avery'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d20'),
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  genre: 'History',
  published_year: 2011,
  price: 22,
  in_stock: true,
  pages: 443,
  publisher: 'Harper'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d23'),
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  genre: 'Psychology',
  published_year: 2011,
  price: 28,
  in_stock: true,
  pages: 499,
  publisher: 'Farrar, Straus and Giroux'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d26'),
  title: 'Zero to One',
  author: 'Peter Thiel',
  genre: 'Business',
  published_year: 2014,
  price: 19,
  in_stock: true,
  pages: 224,
  publisher: 'Crown Business'
}
db.books.find({ author: "George Orwell" })
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d21'),
  title: '1984',
  author: 'George Orwell',
  genre: 'Fiction',
  published_year: 1949,
  price: 15,
  in_stock: true,
  pages: 328,
  publisher: 'Secker & Warburg'
}
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 17 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.books.deleteOne({ title: "The Hobbit" })
{
  acknowledged: true,
  deletedCount: 1
}
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
})
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d20'),
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  genre: 'History',
  published_year: 2011,
  price: 22,
  in_stock: true,
  pages: 443,
  publisher: 'Harper'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d23'),
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  genre: 'Psychology',
  published_year: 2011,
  price: 28,
  in_stock: true,
  pages: 499,
  publisher: 'Farrar, Straus and Giroux'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d26'),
  title: 'Zero to One',
  author: 'Peter Thiel',
  genre: 'Business',
  published_year: 2014,
  price: 19,
  in_stock: true,
  pages: 224,
  publisher: 'Crown Business'
}
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
)
{
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  price: 30
}
{
  title: 'Clean Code',
  author: 'Robert C. Martin',
  price: 25
}
{
  title: 'Atomic Habits',
  author: 'James Clear',
  price: 20
}
{
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  price: 22
}
{
  title: '1984',
  author: 'George Orwell',
  price: 17
}
{
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  price: 28
}
{
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  price: 14
}
{
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  price: 16
}
{
  title: 'Zero to One',
  author: 'Peter Thiel',
  price: 19
}
db.books.find().sort({ price: 1 })
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d24'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 14,
  in_stock: true,
  pages: 281,
  publisher: 'J.B. Lippincott & Co.'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d25'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 16,
  in_stock: false,
  pages: 208,
  publisher: 'HarperTorch'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d21'),
  title: '1984',
  author: 'George Orwell',
  genre: 'Fiction',
  published_year: 1949,
  price: 17,
  in_stock: true,
  pages: 328,
  publisher: 'Secker & Warburg'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d26'),
  title: 'Zero to One',
  author: 'Peter Thiel',
  genre: 'Business',
  published_year: 2014,
  price: 19,
  in_stock: true,
  pages: 224,
  publisher: 'Crown Business'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d1f'),
  title: 'Atomic Habits',
  author: 'James Clear',
  genre: 'Self-help',
  published_year: 2018,
  price: 20,
  in_stock: false,
  pages: 320,
  publisher: 'Avery'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d20'),
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  genre: 'History',
  published_year: 2011,
  price: 22,
  in_stock: true,
  pages: 443,
  publisher: 'Harper'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d1e'),
  title: 'Clean Code',
  author: 'Robert C. Martin',
  genre: 'Programming',
  published_year: 2008,
  price: 25,
  in_stock: true,
  pages: 464,
  publisher: 'Prentice Hall'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d23'),
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  genre: 'Psychology',
  published_year: 2011,
  price: 28,
  in_stock: true,
  pages: 499,
  publisher: 'Farrar, Straus and Giroux'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d1d'),
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  genre: 'Programming',
  published_year: 1999,
  price: 30,
  in_stock: true,
  pages: 352,
  publisher: 'Addison-Wesley'
}
db.books.find().sort({ price: -1 })
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d1d'),
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  genre: 'Programming',
  published_year: 1999,
  price: 30,
  in_stock: true,
  pages: 352,
  publisher: 'Addison-Wesley'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d23'),
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  genre: 'Psychology',
  published_year: 2011,
  price: 28,
  in_stock: true,
  pages: 499,
  publisher: 'Farrar, Straus and Giroux'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d1e'),
  title: 'Clean Code',
  author: 'Robert C. Martin',
  genre: 'Programming',
  published_year: 2008,
  price: 25,
  in_stock: true,
  pages: 464,
  publisher: 'Prentice Hall'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d20'),
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  genre: 'History',
  published_year: 2011,
  price: 22,
  in_stock: true,
  pages: 443,
  publisher: 'Harper'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d1f'),
  title: 'Atomic Habits',
  author: 'James Clear',
  genre: 'Self-help',
  published_year: 2018,
  price: 20,
  in_stock: false,
  pages: 320,
  publisher: 'Avery'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d26'),
  title: 'Zero to One',
  author: 'Peter Thiel',
  genre: 'Business',
  published_year: 2014,
  price: 19,
  in_stock: true,
  pages: 224,
  publisher: 'Crown Business'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d21'),
  title: '1984',
  author: 'George Orwell',
  genre: 'Fiction',
  published_year: 1949,
  price: 17,
  in_stock: true,
  pages: 328,
  publisher: 'Secker & Warburg'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d25'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 16,
  in_stock: false,
  pages: 208,
  publisher: 'HarperTorch'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d24'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 14,
  in_stock: true,
  pages: 281,
  publisher: 'J.B. Lippincott & Co.'
}
db.books.find().skip(5).limit(5)
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d23'),
  title: 'Thinking, Fast and Slow',
  author: 'Daniel Kahneman',
  genre: 'Psychology',
  published_year: 2011,
  price: 28,
  in_stock: true,
  pages: 499,
  publisher: 'Farrar, Straus and Giroux'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d24'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 14,
  in_stock: true,
  pages: 281,
  publisher: 'J.B. Lippincott & Co.'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d25'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 16,
  in_stock: false,
  pages: 208,
  publisher: 'HarperTorch'
}
{
  _id: ObjectId('6842dd3ed06a41e0b5ad0d26'),
  title: 'Zero to One',
  author: 'Peter Thiel',
  genre: 'Business',
  published_year: 2014,
  price: 19,
  in_stock: true,
  pages: 224,
  publisher: 'Crown Business'
}
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
])
{
  _id: 'Self-help',
  averagePrice: 20
}
{
  _id: 'History',
  averagePrice: 22
}
{
  _id: 'Psychology',
  averagePrice: 28
}
{
  _id: 'Business',
  averagePrice: 19
}
{
  _id: 'Programming',
  averagePrice: 27.5
}
{
  _id: 'Fiction',
  averagePrice: 15.666666666666666
}
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } },
  { $limit: 1 }
])
{
  _id: 'George Orwell',
  count: 1
}
db.books.aggregate([
  {
    $project: {
      decade: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])
{
  _id: 1940,
  count: 1
}
{
  _id: 1960,
  count: 1
}
{
  _id: 1980,
  count: 1
}
{
  _id: 1990,
  count: 1
}
{
  _id: 2000,
  count: 1
}
{
  _id: 2010,
  count: 4
}
db.books.createIndex({ title: 1 })
title_1
db.books.createIndex({ author: 1, published_year: -1 })
author_1_published_year_-1
db.books.find({ title: "1984" }).explain("executionStats")

db.books.find({ author: "George Orwell", published_year: 1949 }).explain("executionStats")
{
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          author: [
            '["George Orwell", "George Orwell"]'
          ],
          published_year: [
            '[1949, 1949]'
          ]
        },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  queryShapeHash: 'C723A03D914E8AB15A4F6B8E72C2E158CA114F3B9A50FE012146C9F2E0CF9962',
  command: {
    find: 'books',
    filter: {
      author: 'George Orwell',
      published_year: 1949
    },
    '$db': 'plp_bookstore'
  },
  serverInfo: {
    host: 'DESKTOP-GN9M2P3',
    port: 27017,
    version: '8.0.9',
    gitVersion: 'f882ef816d531ecfbb593843e4c554fda90ca416'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}
plp_bookstore

