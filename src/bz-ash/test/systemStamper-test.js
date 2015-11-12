var expect = require('chai').expect,
	SystemFactory = require('../systemStamper')

describe('System Stamper', function() {
	it('systemsGetterReturnsAllTheSystems')
	it('addSystemCallsAddToEngine')
	it('removeSystemCallsRemovedFromEngine')
	it('engineCallsUpdateOnSystems')
	it('defaultPriorityIsZero')
	it('canSetPriorityWhenAddingSystem')
	it('systemsUpdatedInPriorityOrderIfSameAsAddOrder')
	it('systemsUpdatedInPriorityOrderIfReverseOfAddOrder')
	it('systemsUpdatedInPriorityOrderIfPrioritiesAreNegative')
	it('updatingIsFalseBeforeUpdate')
	it('updatingIsTrueDuringUpdate')
	it('updatingIsFalseAfterUpdate')
	it('completeSignalIsDispatchedAfterUpdate')
	it('getSystemReturnsTheSystem')
	it('getSystemReturnsNullIfNoSuchSystem')
	it('removeAllSystemsDoesWhatItSays')
	it('removeSystemAndAddItAgainDoesNotCauseInvalidLinkedList')

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