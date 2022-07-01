this.myService.getAll().subscribe(
      (genere: any) => {
        var data = genere.data;
        for (var i = 0; i <= data.length; i++) {
          console.log(data[i]);
        }
      }
    )
