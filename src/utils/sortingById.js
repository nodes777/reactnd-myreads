        let newState = {
          currentlyReading: prevState.currentlyReading.map((bookInShelf) => 
            {
              if(idObj.currentlyReading.includes(bookInShelf.id)){
                  return bookInShelf;
              }
            }),
          wantToRead: prevState.wantToRead.map((bookInShelf) => 
            {
              if(idObj.wantToRead.includes(bookInShelf.id)){
                  return bookInShelf;
              }
            }),
          read: prevState.read.map((bookInShelf) => 
            {
              if(idObj.read.includes(bookInShelf.id)){
                  return bookInShelf;
              }
            }),
        } 