export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780385534277_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D";
   let book2 = "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780744080049_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D";
   let book3 = "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593296929_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Wager: A Tale of Shipwreck by Mutiny and Murder" />
         <img src={book2} alt="Baking YesterYear by B. Dylan Hollis" />
         <img src={book3} alt="This Is Your Mind On Plants by Michael Pollan" />
      </div>      
   );
}