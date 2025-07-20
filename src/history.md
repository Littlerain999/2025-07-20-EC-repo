phase 1: connect to database and create server [done]
    files created: app.js, config.js, connection.js, index.js

phase 2: create a router. [done]
        > one main [done]
        > sub-routers
            > for user  > sign-up [done]
                        > login [done]
            > for product > create [done]
                          > get-all [done]
                          > get-single [done]
                          > update [done]                            
                          > delete [done]
            > for category  > create [done]
                            > get [done]
                            > delete [done]

phase 3: Create controllers [done]
    for:
        > USER [done]
            # sign-up [done]
            # login [done]
        > PRODUCT [done]
            # create [done]
            # get all [done]
            # get single [done]
            # update [done]
            # delete [done]
        > CATEGORY [done]
            # create [done]
            # get all [done]
            # delete [done]
            
phase 4: Create models
    For:
        1. USER [done]
            # sign-up [done]
            # login [done]
        2. PRODUCT [done]
            # create [done]
        3. CATEGORY [done]
            # category [done]

phase 5: create validation
    For:
        1. USER [done]
            # sign-up [done]
            # login [done]
        2. PRODUCT [done]
            # create [done]
        3. CATEGORY [done]
            # create [done]

phase 6: add functioning to the controllers []
    For:
        > USER []
            # sign-up [done]
            # login [done]
        > PRODUCT []
            # create [pending]
            # get all []
            # get single []
            # update []
            # delete []
        > CATEGORY []
            # create []
            # get all []
            # delete []
    changed to middlewarev   Reason: A middleware is required before create
        >> hasToken [pending]
        >> isBuyer []
        >> isSeller []