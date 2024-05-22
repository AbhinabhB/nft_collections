let nftCollection = [];

// Mint the NFTs and then add them to nftCollection
function mintNFT(name, uid, eyeColor, shirtType) {
    const newNFT = {
        "name": name,
        "uid": uid,
        "eyeColor": eyeColor,
        "shirtType": shirtType
    }
    nftCollection.push(newNFT);
}

// Print all the NFTs present in nftCollection
function listNFTs() {
    for(let i = 0; i < nftCollection.length; i++) {
        console.log("\n", "NFT", i + 1, ":");
        console.log("Name: ", nftCollection[i].name);
        console.log("UID: ", nftCollection[i].uid);
        console.log("Eye Color: ", nftCollection[i].eyeColor);
        console.log("Shirt Type: ", nftCollection[i].shirtType);
    }
}

// Get the total number of NFTs in nftCollection
function getTotalSupply() {
    console.log("\n", "Total Number of NFTs: ", nftCollection.length);
}

mintNFT("abhi", "15352", "black", "polo");
mintNFT("mrin", "10998", "black", "polo");
mintNFT("kiran", "15164", "black", "polo");
listNFTs();
getTotalSupply();