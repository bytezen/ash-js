var expect = require('chai').expect,
	SystemFactory = require('../systemStamper'),
    EngineFactory = require('../enginefactory')




describe('System Stamper', function() {
    var fnCall = {},
        addFnCall = function() {
            fnCall['add']++    
        },
        removeFnCall = function() {
            fnCall['remove']++   
        },
        updateFnCall = function() {
            fnCall['update']++
        }

    var mockSystemPrototype = SystemFactory()
                                .methods({
                                    addToEngine: addFnCall,
                                    removeFromEngine: removeFnCall,
                                    update: updateFnCall
                                })

    engine = EngineFactory().create()


    before('',function(){
        fnCall['add'] = 0
        fnCall['remove'] = 0
        fnCall['update'] = 0

    })

	it('systems Getter Returns All The Systems', function(){
        var sys1 = mockSystemPrototype.create({name: 'mock1'}),
            sys2 = mockSystemPrototype.create({name: 'mock2'}),
            sys3 = mockSystemPrototype.create({name: 'mock3'}),
            engine = EngineFactory().create()

        engine.addSystem(sys1)             
        engine.addSystem(sys2)             
        engine.addSystem(sys3)

        expect(engine.systemList.list).to.have.length(3)
        expect(engine.systemList.list.every(function(x){ 
                                                return [sys1,sys2,sys3].indexOf(x) >= 0;
                                            })).to.be.true             
    })

	it('add System Calls Add To Engine')
	it('remove System Calls Removed From Engine')
	it('engine Calls Update On Systems')
	it('default Priority Is Zero')
	it('can Set Priority When Adding System')
	it('systems Updated In Priority Order If Same As Add Order')
	it('systems Updated In Priority Order If Reverse Of Add Order')
	it('systems Updated In Priority Order If Priorities Are Negative')
	it('updating Is False Before Update')
	it('updating Is True During Update')
	it('updating Is False After Update')
	it('complete Signal Is Dispatched After Update')
	it('get System Returns The System')
	it('get System Returns Null If No Such System')
	it('remove All Systems Does What It Says')
	it('remove System And Add It Again Does Not Cause Invalid Linked List')

/*	
    test("systemsGetterReturnsAllTheSystems", function() {
        var system1 = new Ash.System();
        engine.addSystem( system1, 1 );
        var system2 = new Ash.System();
        engine.addSystem( system2, 1 );
        equal( engine.systems.length, 2 );
        notEqual(engine.systems.indexOf(system1), -1);
        notEqual(engine.systems.indexOf(system2), -1);
    });

    test("addSystemCallsAddToEngine", 2, function() {
        stop();
        var system = new MockSystem();
        asyncCallback = addedCallbackMethod;
        engine.addSystem( system, 0 );
        setTimeout(function(){
            start();
        }, 10);
    });

    test("removeSystemCallsRemovedFromEngine", 2, function() {
        stop();
        var system = new MockSystem();
        engine.addSystem( system, 0 );
        asyncCallback = removedCallbackMethod;
        engine.removeSystem( system );
        setTimeout(function(){
            start();
        }, 10);
    });

    test("engineCallsUpdateOnSystems", 2, function() {
        stop();
        var system = new MockSystem();
        engine.addSystem( system, 0 );
        asyncCallback = updateCallbackMethod;
        engine.update( 0.1 );
        setTimeout(function() {
            start();
        }, 10);
    });

    test("defaultPriorityIsZero", function() {
        var system = new MockSystem();
        equal( system.priority, 0 );
    });

    test("canSetPriorityWhenAddingSystem", function() {
        var system = new MockSystem();
        engine.addSystem( system, 10 );
        equal( system.priority, 10 );
    });

    test("systemsUpdatedInPriorityOrderIfSameAsAddOrder", 2, function() {
        system1 = new MockSystem();
        engine.addSystem( system1, 10 );
        system2 = new MockSystem();
        engine.addSystem( system2, 20 );
        asyncCallback = updateCallbackMethod1;
        engine.update( 0.1 );
    });

    test("systemsUpdatedInPriorityOrderIfReverseOfAddOrder", 2, function() {
        system2 = new MockSystem();
        engine.addSystem( system2, 20 );
        system1 = new MockSystem();
        engine.addSystem( system1, 10 );
        asyncCallback = updateCallbackMethod1;
        engine.update( 0.1 );
    });

    test("systemsUpdatedInPriorityOrderIfPrioritiesAreNegative", 2, function() {
        system2 = new MockSystem();
        engine.addSystem( system2, 10 );
        system1 = new MockSystem();
        engine.addSystem( system1, -20 );
        asyncCallback = updateCallbackMethod1;
        engine.update( 0.1 );
    });

    test("updatingIsFalseBeforeUpdate", function() {
        ok( engine.updating === false );
    });

    test("updatingIsTrueDuringUpdate", 1, function() {
        stop();
        var system = new MockSystem();
        engine.addSystem( system, 0 );
        asyncCallback = assertsUpdatingIsTrue;
        engine.update( 0.1 );
        start();
    });

    test("updatingIsFalseAfterUpdate", function() {
        engine.update(0.1);
        ok( engine.updating === false );
    });

    test("completeSignalIsDispatchedAfterUpdate", 1, function() {
        var system = new MockSystem();
        engine.addSystem( system, 0 );
        asyncCallback = listensForUpdateComplete;
        engine.update(0.1);
    });

    test("getSystemReturnsTheSystem", function(){
        var system1 = new MockSystem();
        engine.addSystem( system1, 0 );
        engine.addSystem( new Ash.System(), 0 );
        strictEqual( engine.getSystem( MockSystem ), system1 );
    });

    test("getSystemReturnsNullIfNoSuchSystem", function() {
        engine.addSystem( new Ash.System(), 0 );
        strictEqual( engine.getSystem( MockSystem ), null );
    });

    test("removeAllSystemsDoesWhatItSays", function() {
        engine.addSystem( new Ash.System(), 0 );
        engine.addSystem( new MockSystem(), 0 );
        engine.removeAllSystems();
        strictEqual( engine.getSystem( MockSystem ), null );
        strictEqual( engine.getSystem( Ash.System ), null );
    });

    test("removeSystemAndAddItAgainDoesNotCauseInvalidLinkedList", function() {
        var systemB = new Ash.System();
        var systemC = new Ash.System();
        engine.addSystem( systemB, 0 );
        engine.addSystem( systemC, 0 );
        engine.removeSystem( systemB );
        engine.addSystem( systemB, 0 );
        strictEqual( systemC.previous, null );

        strictEqual( systemB.next, null );
    });
*/

})