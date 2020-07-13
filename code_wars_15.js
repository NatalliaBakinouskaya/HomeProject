// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"
// function domainName(url){
//    return url.replace(/.+(?<=\/\/|www.)/g, '').replace(/\..+/g, '');
//   }
  function domainName(url){
   return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
 }  
  console.log(domainName("http://google.co.jp.jf"))